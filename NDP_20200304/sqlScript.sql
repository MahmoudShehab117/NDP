create or replace PROCEDURE "UPDATE_CAMPAIGN_STATS" 
AS
    CAMP_STAT_SEQ              NUMBER;
    CUR_DATE                   DATE;
    CAMPAINS_LAST_STATS_DATE   DATE;
    V_EXCEPTION_MESSAGE        VARCHAR2 (4000);
    CAMP_IS_OPEN_ENDED            NUMBER;
    CURSOR CAMP_STATS IS
          SELECT HDCS.CAMPAIGN_ID,
                 HDCS.START_TIME,
                 HDCS.END_TIME,
                 SUM (HDCS.SENT)            CAMP_SENT,
                 SUM (HDCS.DELIVERED)       CAMP_DELIVERED,
                 SUM (HDCS.FAILED)          CAMP_FAILED,
                 HDCS.RATE,
                 SUM (HDCS.TOTAL_COUNT)     TOTAL_COUNT
            FROM H_DAILY_CAMPAIGN_STATISTICS HDCS
           WHERE HDCS.CAMPAIGN_ID IN
                     (SELECT DISTINCT HSMS.CAMPAIGN_ID
                        FROM H_SMS HSMS
                       WHERE TRUNC (HSMS.HISTORY_DATE) = TRUNC (SYSDATE) --SELECT DISTINCT HDCS.CAMPAIGN_ID
                                                                        -- FROM NDP_TST.H_DAILY_CAMPAIGN_STATISTICS HDCS
                                                                        -- WHERE TRUNC (HDCS.STATS_DATE) = TRUNC (SYSDATE)
                                                                        -- BETWEEN TO_DATE('2019-08-12', 'YYYY-MM-DD') AND TO_DATE('2019-08-15', 'YYYY-MM-DD')
                                                                        )
        GROUP BY HDCS.CAMPAIGN_ID,
                 HDCS.START_TIME,
                 HDCS.END_TIME,
                 HDCS.SENT,
                 HDCS.RATE;
BEGIN
    WITH
        X
        AS
            (  SELECT HDCS.CAMPAIGN_ID,
                      TRUNC (HDCS.STATS_DATE)
                          MAX_STATS_DATE,
                      RANK ()
                          OVER (PARTITION BY CAMPAIGN_ID
                                ORDER BY STATS_DATE DESC)
                          STATS_DATE_RANK
                 FROM H_DAILY_CAMPAIGN_STATISTICS HDCS
                WHERE HDCS.CAMPAIGN_ID IN
                          (SELECT DISTINCT CAMPAIGN_ID
                             FROM H_SMS
                            WHERE TRUNC (HISTORY_DATE) = TRUNC (SYSDATE))
             ORDER BY HDCS.CAMPAIGN_ID DESC)
    SELECT MIN (MAX_STATS_DATE)
      INTO CAMPAINS_LAST_STATS_DATE
      FROM X
     WHERE STATS_DATE_RANK = 1;

    CUR_DATE := CAMPAINS_LAST_STATS_DATE;

    WHILE CUR_DATE < TRUNC (SYSDATE)
    LOOP
        UPDATE_DAILY_CAMPAIGN_STATS (CUR_DATE);
        CUR_DATE := CUR_DATE + 1;
    END LOOP;

    UPDATE_DAILY_CAMPAIGN_STATS (NULL);


    FOR REC IN CAMP_STATS
    LOOP
        BEGIN
            CAMP_STAT_SEQ := CAMPAIGNS_STAT_SEQ.NEXTVAL;

            MERGE INTO H_CAMPAIGN_STATISTICS C
                 USING DUAL
                    ON (CAMPAIGN_ID = REC.CAMPAIGN_ID)
            WHEN MATCHED
            THEN
                UPDATE SET SENT = REC.CAMP_SENT,
                           DELIVERED = REC.CAMP_DELIVERED,
                           FAILED = REC.CAMP_FAILED
                           --RATE = REC.RATE
                           --TOTAL_COUNT = REC.TOTAL_COUNT --Commented By Mina
            WHEN NOT MATCHED
            THEN
                INSERT     (ID,
                            CAMPAIGN_ID,
                            START_TIME,
                            END_TIME,
                            SENT,
                            DELIVERED,
                            FAILED,
                            --RATE
                            TOTAL_COUNT
                            )
                    VALUES (CAMP_STAT_SEQ,
                            REC.CAMPAIGN_ID,
                            REC.START_TIME,
                            REC.END_TIME,
                            REC.CAMP_SENT,
                            REC.CAMP_DELIVERED,
                            REC.CAMP_FAILED,
                            --REC.RATE,
                            REC.TOTAL_COUNT
                            );
            SELECT IS_OPEN_ENDED INTO CAMP_IS_OPEN_ENDED FROM ADM_CAMPAIGNS WHERE CAMPAIGN_ID = REC.CAMPAIGN_ID;              
            IF  CAMP_IS_OPEN_ENDED = 1 THEN
                UPDATE H_CAMPAIGN_STATISTICS
                SET TOTAL_COUNT = (SELECT COUNT(1) FROM B2B_OTF_DIAL_INFO WHERE CAMPAIGN_ID = REC.CAMPAIGN_ID)
                WHERE CAMPAIGN_ID = REC.CAMPAIGN_ID;
            END IF;
            
            COMMIT;

            UPDATE H_CAMPAIGN_STATISTICS
               SET LAST_SENDING_RATE = RATE
             WHERE RATE > 0;

            COMMIT;
        EXCEPTION
            WHEN OTHERS
            THEN
                DBMS_OUTPUT.PUT_LINE (SQLERRM);
                --RAISE;
                NULL;
        END;
    END LOOP;

    COMMIT;
END;