create or replace PROCEDURE IMMEDIATE_BACKUP_PROCESS_INFO  AS
    historydate    VARCHAR2(30);
    newtablename   VARCHAR2(30);
	RUN_ID NUMBER;
BEGIN
	SELECT H_SP_EXEC_TIME_RUN_SEQ.nextval INTO RUN_ID FROM dual;
	LOG_H_SP_EXEC_TIME(RUN_ID, 'IMMEDIATE_BACKUP_PROCESS_INFO', systimestamp, null);
    historydate := to_char(sysdate, 'yyyymmdd');-- can be replaced with '20200101' for a specific date.
    newtablename := 'ADM_PROCESS_INFO_' || historydate;
    EXECUTE IMMEDIATE 'ALTER TABLE ADM_PROCESS_INFO RENAME TO '
                      || newtablename;
    EXECUTE IMMEDIATE 'CREATE TABLE ADM_PROCESS_INFO '
                      || '
(
  PROCESS_ID   NUMBER(38),
  SENDER_NAME  VARCHAR2(50 BYTE),
  ENTRY_DATE   DATE                             DEFAULT sysdate,
  SEPARATOR    VARCHAR2(5 BYTE)
)
PARTITION BY RANGE (ENTRY_DATE)
INTERVAL(NUMTODSINTERVAL(1,''DAY''))
(PARTITION INVALID VALUES LESS THAN (TIMESTAMP'' 2010-01-01 00:00:00''))'
                      ;


    EXECUTE IMMEDIATE 'INSERT /*+APPEND*/ INTO ADM_PROCESS_INFO_ARCHIVE'
                      || ' SELECT * FROM '|| newtablename;
                      EXECUTE IMMEDIATE 'COMMIT';
   EXECUTE IMMEDIATE 'TRUNCATE TABLE '||newtablename ;

	LOG_H_SP_EXEC_TIME(RUN_ID, 'IMMEDIATE_BACKUP_PROCESS_INFO', null, systimestamp);
END;