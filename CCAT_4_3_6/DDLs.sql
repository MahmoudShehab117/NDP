ALTER TABLE TX_USER_MONETARY_TOTALS 
ADD (IS_LOCKED NUMBER(1) DEFAULT 0 NOT NULL);

ALTER TABLE TX_USER_MONETARY_TOTALS 
ADD (LOCK_TIMESTAMP TIMESTAMP );

