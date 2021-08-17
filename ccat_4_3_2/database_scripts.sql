INSERT INTO "LK_SYSTEM_FEATURES" (SYS_FEATURE_ID, SYS_FEATURE_NAME) VALUES ('46', 'WRITE_CALL_ACTIVITY_ADMIN');
INSERT INTO "LK_CC_FEATURES" (CC_FEATURE_ID, CC_FEATURE_NAME) VALUES ('207', 'MAKE_CALL_REASON');

--------------------------------------------------------
--  DDL for Table LK_ACTIVITY_TYPE
--------------------------------------------------------

  CREATE TABLE "LK_ACTIVITY_TYPE" 
   (	
    "ID" NUMBER NOT NULL , 
	"NAME" VARCHAR2(20 BYTE) NOT NULL
   ) ;

--------------------------------------------------------
--  DDL for Table ADM_REASON_ACTIVITY
--------------------------------------------------------

  CREATE TABLE "ADM_REASON_ACTIVITY" 
   (	
   "ACTIVITY_ID" NUMBER NOT NULL, 
	"ACTIVITY_TYPE" VARCHAR2(20 BYTE) NOT NULL, 
	"PARENT_ID" NUMBER, 
	"ACTIVITY_NAME" VARCHAR2(50 BYTE) NOT NULL, 
	"IS_ACTIVE" NUMBER NOT NULL
   ) ;

--------------------------------------------------------
--  DDL for Sequence S_ADM_REASON_ACTIVITY
--------------------------------------------------------

   CREATE SEQUENCE  "S_ADM_REASON_ACTIVITY"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20 NOORDER  NOCYCLE   ;
  
--------------------------------------------------------
--  DDL for Table TX_CALL_REASONS
--------------------------------------------------------
	CREATE TABLE "TX_CALL_REASONS"
	 (
		"CALL_REASON_ID" NUMBER NOT NULL,
		"USER_ID" NUMBER(6,0) NOT NULL,
		"USER_NAME" VARCHAR2(50 BYTE) NOT NULL,
		"MSISDN" VARCHAR2(20 BYTE) NOT NULL,
		"MSISDN_LAST_DIGIT" NUMBER NOT NULL,
		"ENTRY_DATE" DATE NOT NULL,
		"DIRECTION" VARCHAR2(50 BYTE) ,
		"FAMILY" VARCHAR2(50 BYTE) ,
		"TYPE" VARCHAR2(50 BYTE) ,
		"REASON" VARCHAR2(50 BYTE)
	 ) PARTITION BY RANGE (ENTRY_DATE) 
  INTERVAL(numtodsinterval (1, 'DAY'))
  SUBPARTITION BY LIST (MSISDN_LAST_DIGIT) ( 
	PARTITION p0 VALUES LESS THAN (TO_DATE('1-8-2006','DD-MM-yyyy')) (
		SUBPARTITION s0 VALUES (0),
		SUBPARTITION s1 VALUES (1),
		SUBPARTITION s2 VALUES (2),
		SUBPARTITION s3 VALUES (3),
		SUBPARTITION s4 VALUES (4),
		SUBPARTITION s5 VALUES (5),
		SUBPARTITION s6 VALUES (6),
		SUBPARTITION s7 VALUES (7),
		SUBPARTITION s8 VALUES (8),
		SUBPARTITION s9 VALUES (9)

	)
  );

--------------------------------------------------------
--  DDL for Index TX_CALL_REASONS_USER_ID_IDX
--------------------------------------------------------
  CREATE INDEX "TX_CALL_REASONS_USER_ID_IDX" ON "TX_CALL_REASONS" ("USER_ID") LOCAL

--------------------------------------------------------
--  DDL for Sequence S_TX_CALL_REASONS
--------------------------------------------------------

   CREATE SEQUENCE  "S_TX_CALL_REASONS"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20 NOORDER  NOCYCLE   ;


--------------------------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------
--  DML for Table LK_ACTIVITY_TYPE
--------------------------------------------------------
	INSERT INTO "LK_ACTIVITY_TYPE" ( ID,NAME) VALUES (1,'DIRECTION');
	INSERT INTO "LK_ACTIVITY_TYPE" ( ID,NAME) VALUES (2,'FAMILY');
	INSERT INTO "LK_ACTIVITY_TYPE" ( ID,NAME) VALUES (3,'TYPE');
	INSERT INTO "LK_ACTIVITY_TYPE" ( ID,NAME) VALUES (4,'REASON');

