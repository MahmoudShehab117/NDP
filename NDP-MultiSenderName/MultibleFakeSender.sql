INSERT INTO "ADM_SYSTEM_PROPERTIES" (GROUP_NAME, KEY, VALUE, DESCRIPTION) VALUES ('GENERAL', 'SENDER_NAME_LENGTH', '20', 'max length allowed for Sender name');

CREATE TABLE ADM_PROCESS_INFO
  (
    PROCESS_ID  NUMBER(38),
    SENDER_NAME VARCHAR2(50),
    ENTRY_DATE DATE default sysdate
  );
  


create or replace PROCEDURE "GET_OTF_CAMPAIGN_DIALS" (
   P_CAMPAIGN_ID            NUMBER,
   P_LAST_DIGIT   VARCHAR2,
   P_DIALS              OUT SYS_REFCURSOR)
AS
   V_BATCH_ID   NUMBER;
   V_BATCH_SIZE   NUMBER;
   
/*
Retrieve Batchs of MSISDNS to be served for running campaigns.
CREATED BY Mohamed Abdelaty
STATUS
   [0]       -> SUCCESS
   [-1]      -> NO RECRODS
  [-100]   -> UNHANDLED EXCEPTION
*/
BEGIN
    -- Get unique batch id from sequence 
   V_BATCH_ID := OTF_BATCH_ID_SEQ.NEXTVAL;
  select VALUE into V_BATCH_SIZE from ADM_SYSTEM_PROPERTIES where KEY = 'DIALS_BATCH_SIZE';
 
    --MARK CURRENT BATCH TO BE DEQUEUED
   UPDATE B2B_OTF_DIAL_INFO
      SET BATCH_ID = V_BATCH_ID
    WHERE CAMPAIGN_ID = P_CAMPAIGN_ID 
      AND MSISDN_LAST_DIG = P_LAST_DIGIT 
      AND BATCH_ID IS NULL
      AND TRUNC(START_FROM) < TRUNC(SYSDATE + 1)
      AND ROWNUM <= V_BATCH_SIZE;

   COMMIT;

   OPEN P_DIALS FOR
        SELECT B2B_OTF_DIAL_INFO.*,ADM_PROCESS_INFO.SENDER_NAME
        FROM B2B_OTF_DIAL_INFO
        LEFT JOIN ADM_PROCESS_INFO 
        ON B2B_OTF_DIAL_INFO.process_ID = ADM_PROCESS_INFO.process_id
       WHERE CAMPAIGN_ID = P_CAMPAIGN_ID 
      AND MSISDN_LAST_DIG = P_LAST_DIGIT 
      AND BATCH_ID = V_BATCH_ID;

EXCEPTION
   WHEN OTHERS
   THEN
      LOG_SP_EXCEPTION('GET_OTF_CAMPAIGN_DIALS('|| P_CAMPAIGN_ID || ')', SQLCODE, SQLERRM);
      RAISE;
END;





create or replace PROCEDURE "CACHE_MSISDNS_SNAP" (
   P_GROUP_ID       NUMBER,
   P_CAMPAIGN_ID    NUMBER)
AS
   P_CAMPAIGN_SENDER   VARCHAR2(100);
   P_PROCESS_ID   NUMBER(38);
/*
CREATED BY MOHAMED ABDELATY
THIS PROCEDURES UPLOADS A COPY OF GROUPS' MSISDN INTO OTF TABLE TO BE USED IN CAMPAIGN HANDLING
*/

BEGIN
   -- UPDATING CAMPAIGN'S STATUS TO BE MARKED AS CACHING SNAPSHOT
   
   select SENDER_NAME INTO P_CAMPAIGN_SENDER from ADM_CAMPAIGNS WHERE CAMPAIGN_ID = P_CAMPAIGN_ID;
   P_PROCESS_ID := B2B_DIAL_PROCESS_ID_SEQ.NEXTVAL;
   
   UPDATE ADM_CAMPAIGNS
      SET STATUS = 7
    WHERE CAMPAIGN_ID = P_CAMPAIGN_ID;

   COMMIT;
  
  INSERT INTO ADM_PROCESS_INFO (PROCESS_ID, SENDER_NAME)
    VALUES (P_PROCESS_ID, P_CAMPAIGN_SENDER);

   INSERT INTO B2B_OTF_DIAL_INFO (CAMPAIGN_ID,
                                  MSISDN,
                                  PARAMETERS,
                                  MSISDN_LAST_DIG,
                                  PROCESS_ID)
      SELECT P_CAMPAIGN_ID,
             MSISDN,
             PARAMETERS,
             MSISDN_LAST_DIG,
             P_PROCESS_ID
        FROM GROUP_MSISDN
       WHERE GROUP_ID = P_GROUP_ID;

   COMMIT;

   --MARKING CAMPAIGN AS READY
   UPDATE ADM_CAMPAIGNS
      SET STATUS = 4
    WHERE CAMPAIGN_ID = P_CAMPAIGN_ID;

   COMMIT;
EXCEPTION
   WHEN OTHERS
   THEN
      --MARKING CAMPAIGN AS FAILED CACHING SNAPSHOT
      UPDATE ADM_CAMPAIGNS
         SET STATUS = 8
       WHERE CAMPAIGN_ID = P_CAMPAIGN_ID;

      COMMIT;
      RAISE;
END;





