backup the old jar of [campaignGateway and it's Common jar] and [ended/openEnded campaign handler and it's Common jar].
rename the jars with the current deployment jars.
replace the jars with the new one.
run MultibleFakeSender.sql script.
deploy and check the error logs.



Sample request with another Sender name: 

http://localhost:9098/ndpApi/appenddials
	{
		"username":"user",
		"password":"***",
		"campaignId":24,
		"fakeSender":"Etisalat",
		"dialsData" :[
						"01111711742",
						"01111131321",
						"01111711743"
						]
					
	}