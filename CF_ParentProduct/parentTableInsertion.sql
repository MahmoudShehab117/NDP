REM INSERTING into LK_PARENT_PRODUCTS
SET DEFINE OFF;
Insert into LK_PARENT_PRODUCTS (ID,PRODUCT_NAME,PRODUCT_TYPE,PRODUCT_RECURRENCE,CONDITION,MAIN_QUOTA_NAMES,MAIN_QUOTA_TYPE,MAIN_ROUNDING_FACTOR,MAIN_QUOTA_LOCATION,MAIN_QUOTA_UNIT,PRODUCT_STATUS,PRODUCT_STATUS_COND,START_DATE_FLAG,START_DATE_SOURCE_ID,RENEWAL_DATE_FLAG,RENEWAL_DATE_SOURCE_ID,EXPIRY_DATE_FLAG,EXPIRY_DATE_SOURCE_ID,CHILD_PRODUCTS_IDS) values (1,'parent product test',1,'parent product recuurence',null,'flex,super',null,null,null,null,null,null,null,null,null,null,null,null,'232000103,232000102');
