//index
Mock.mock("/dataList",
{
	"code": 200,
	"total":4,
    "rows": [
	    {
	        "Testinfo":{
				"zao":1,
				"wu":1,
				"wan":1,
				"ye":1,
			},
		},
		{
	        "Testinfo":{
				"zao":0,
				"wu":1,
				"wan":0,
				"ye":1,
			},
	    },
	    {
	        "Testinfo":{
				"zao":1,
				"wu":0,
				"wan":1,
				"ye":0,
			},
	    },
	    {
	        "Testinfo":{
				"zao":0,
				"wu":0,
				"wan":0,
				"ye":0,
			},
		},
	]
}
);
