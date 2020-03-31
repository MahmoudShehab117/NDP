
Database:
1- Run the below DMLs:
Insert into ADM_SYSTEM_PROPERTIES
   (GROUP_NAME, KEY, VALUE, DESCRIPTION)
 Values
   ('B2B_CAMPAIGN_HANDLER', 'DB_UNREACHABLE_LOG_THRESHOLD', '1', 'Time to wait between each log for unreachable database (in minutes). ');


System Components:
1- NDPCampHandler (machine 83):
	- backup ndp-Common.jar by renaming to ndp-Common.jar.<date>
	- backup ndpCampaignhandler.jar by renaming to ndpCampaignhandler.jar.<date>
	- copy new jars (ndp-Common.jar, ndpCampaignhandler.jar) into CampaignHandler lib folder. Make sure the names match the old ones.
	- restart engine.
	- repeat above steps on machine 82.
2- NDPOpenCampHandler webservice (machine 83)
	- backup ndp-Common.jar by renaming to ndp-Common.jar.<date>
	- backup ndpOpenCampaignhandler.jar by renaming to ndpOpenCampaignhandler.jar.<date>
	- copy new jars (ndp-Common.jar, ndpOpenCampaignhandler.jar) into OpenCampaignHandler lib folder. Make sure the names match the old ones.
	- restart engine.
	- repeat above steps on machine 82.