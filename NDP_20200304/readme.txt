1-Backup

	1.1-Inside CampaignGateway directory lib path: rename [campaignGateway.jar] to [campaignGateway.jar2020304]
	1.2-Inside CampaignGateway directory lib path: rename [ndp-Common-1.0.jar] to [ndp-Common-1.0.jar2020304]
	1.3-Inside SMSEngine directory lib path: rename [ndp-smpp-adapter.jar] to [ndp-smpp-adapter.jar2020403]
	1.4-Inside SMSEngine directory lib path: rename [sms-broker-core-1.0.jar] to [sms-broker-core-1.0.jar2020304].
2- Deploy
	2.1 Inside CampaignGateway directory path: copy the new [campaignGateway.jar] to lib folder (make sure it has the same name as previous .jar)
	2.2 Inside CampaignGateway directory path: copy the new [ndp-Common-1.0.jar] to lib folder (make sure it has the same name as previous .jar)
	2.3 Inside SMSEngine directory path: copy the new [ndp-smpp-adapter.jar] to lib folder (make sure it has the same name as previous .jar)
	2.4 Inside SMSEngine directory path: copy the new [sms-broker-core-1.0.jar] to lib folder (make sure it has the same name as previous .jar)
	2.5 Connect to NDP schema through SQLDev (or any other). Run associate file "sqlScript.sql"
3- Activate
	3.1 run "./control.sh stop" then "./control.sh start" inside campaignGateway path.
	3.2 run "./control.sh stop" then "./control.sh start" inside SMSEngine folder path.