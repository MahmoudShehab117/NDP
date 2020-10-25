create or replace PROCEDURE "LOG_H_SP_EXEC_TIME" 
  (
     RUN_ID       IN NUMBER,
    SP_NAME       IN VARCHAR2,
    START_TIME    IN TIMESTAMP,
    FINISH_TIME IN TIMESTAMP
  )
AS
  ID NUMBER;
BEGIN
  INSERT
  INTO H_SP_EXEC_TIME_LOGS
    (
     RUN_ID,
      SP_NAME,
      START_TIME,
      FINISH_TIME
    )
    VALUES
    (
      RUN_ID,
      SP_NAME,
      START_TIME,
      FINISH_TIME
    );
    
    COMMIT;
END;