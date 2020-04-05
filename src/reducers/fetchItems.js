import C from '../constants'
var initData = // 20200404192825
// https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_utc&pretty=true&order=asc

[
  {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "launch_date_utc": "2006-03-24T22:30:00.000Z"
  },
  {
    "flight_number": 2,
    "mission_name": "DemoSat",
    "launch_date_utc": "2007-03-21T01:10:00.000Z"
  },
  {
    "flight_number": 3,
    "mission_name": "Trailblazer",
    "launch_date_utc": "2008-08-02T03:34:00.000Z"
  },
  {
    "flight_number": 4,
    "mission_name": "RatSat",
    "launch_date_utc": "2008-09-28T23:15:00.000Z"
  },
  {
    "flight_number": 5,
    "mission_name": "RazakSat",
    "launch_date_utc": "2009-07-13T03:35:00.000Z"
  },
  {
    "flight_number": 6,
    "mission_name": "Falcon 9 Test Flight",
    "launch_date_utc": "2010-06-04T18:45:00.000Z"
  },
  {
    "flight_number": 7,
    "mission_name": "COTS 1",
    "launch_date_utc": "2010-12-08T15:43:00.000Z"
  },
  {
    "flight_number": 8,
    "mission_name": "COTS 2",
    "launch_date_utc": "2012-05-22T07:44:00.000Z"
  },
  {
    "flight_number": 9,
    "mission_name": "CRS-1",
    "launch_date_utc": "2012-10-08T00:35:00.000Z"
  },
  {
    "flight_number": 10,
    "mission_name": "CRS-2",
    "launch_date_utc": "2013-03-01T19:10:00.000Z"
  },
  {
    "flight_number": 11,
    "mission_name": "CASSIOPE",
    "launch_date_utc": "2013-09-29T16:00:00.000Z"
  },
  {
    "flight_number": 12,
    "mission_name": "SES-8",
    "launch_date_utc": "2013-12-03T22:41:00.000Z"
  },
  {
    "flight_number": 13,
    "mission_name": "Thaicom 6",
    "launch_date_utc": "2014-01-06T18:06:00.000Z"
  },
  {
    "flight_number": 14,
    "mission_name": "CRS-3",
    "launch_date_utc": "2014-04-18T19:25:00.000Z"
  },
  {
    "flight_number": 15,
    "mission_name": "OG-2 Mission 1",
    "launch_date_utc": "2014-07-14T15:15:00.000Z"
  },
  {
    "flight_number": 16,
    "mission_name": "AsiaSat 8",
    "launch_date_utc": "2014-08-05T08:00:00.000Z"
  },
  {
    "flight_number": 17,
    "mission_name": "AsiaSat 6",
    "launch_date_utc": "2014-09-07T05:00:00.000Z"
  },
  {
    "flight_number": 18,
    "mission_name": "CRS-4",
    "launch_date_utc": "2014-09-21T05:52:00.000Z"
  },
  {
    "flight_number": 19,
    "mission_name": "CRS-5",
    "launch_date_utc": "2015-01-10T09:47:00.000Z"
  },
  {
    "flight_number": 20,
    "mission_name": "DSCOVR",
    "launch_date_utc": "2015-02-11T23:03:00.000Z"
  },
  {
    "flight_number": 21,
    "mission_name": "ABS-3A / Eutelsat 115W B",
    "launch_date_utc": "2015-03-02T03:50:00.000Z"
  },
  {
    "flight_number": 22,
    "mission_name": "CRS-6",
    "launch_date_utc": "2015-04-14T20:10:00.000Z"
  },
  {
    "flight_number": 23,
    "mission_name": "TürkmenÄlem 52°E / MonacoSAT",
    "launch_date_utc": "2015-04-27T23:03:00.000Z"
  },
  {
    "flight_number": 24,
    "mission_name": "CRS-7",
    "launch_date_utc": "2015-06-28T14:21:00.000Z"
  },
  {
    "flight_number": 25,
    "mission_name": "OG-2 Mission 2",
    "launch_date_utc": "2015-12-22T01:29:00.000Z"
  },
  {
    "flight_number": 26,
    "mission_name": "Jason 3",
    "launch_date_utc": "2016-01-17T15:42:00.000Z"
  },
  {
    "flight_number": 27,
    "mission_name": "SES-9",
    "launch_date_utc": "2016-03-04T23:35:00.000Z"
  },
  {
    "flight_number": 28,
    "mission_name": "CRS-8",
    "launch_date_utc": "2016-04-08T20:43:00.000Z"
  },
  {
    "flight_number": 29,
    "mission_name": "JCSAT-2B",
    "launch_date_utc": "2016-05-06T05:21:00.000Z"
  },
  {
    "flight_number": 30,
    "mission_name": "Thaicom 8",
    "launch_date_utc": "2016-05-27T21:39:00.000Z"
  },
  {
    "flight_number": 31,
    "mission_name": "ABS-2A / Eutelsat 117W B",
    "launch_date_utc": "2016-06-15T14:29:00.000Z"
  },
  {
    "flight_number": 32,
    "mission_name": "CRS-9",
    "launch_date_utc": "2016-07-18T04:45:00.000Z"
  },
  {
    "flight_number": 33,
    "mission_name": "JCSAT-16",
    "launch_date_utc": "2016-08-14T05:26:00.000Z"
  },
  {
    "flight_number": 34,
    "mission_name": "Amos-6",
    "launch_date_utc": "2016-09-01T13:07:00.000Z"
  },
  {
    "flight_number": 35,
    "mission_name": "Iridium NEXT Mission 1",
    "launch_date_utc": "2017-01-14T17:54:00.000Z"
  },
  {
    "flight_number": 36,
    "mission_name": "CRS-10",
    "launch_date_utc": "2017-02-19T14:39:00.000Z"
  },
  {
    "flight_number": 37,
    "mission_name": "EchoStar 23",
    "launch_date_utc": "2017-03-16T06:00:00.000Z"
  },
  {
    "flight_number": 38,
    "mission_name": "SES-10",
    "launch_date_utc": "2017-03-30T22:27:00.000Z"
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "launch_date_utc": "2017-05-01T11:15:00.000Z"
  },
  {
    "flight_number": 40,
    "mission_name": "Inmarsat-5 F4",
    "launch_date_utc": "2017-05-15T23:21:00.000Z"
  },
  {
    "flight_number": 41,
    "mission_name": "CRS-11",
    "launch_date_utc": "2017-06-03T21:07:00.000Z"
  },
  {
    "flight_number": 42,
    "mission_name": "BulgariaSat-1",
    "launch_date_utc": "2017-06-23T19:10:00.000Z"
  },
  {
    "flight_number": 43,
    "mission_name": "Iridium NEXT Mission 2",
    "launch_date_utc": "2017-06-25T20:25:00.000Z"
  },
  {
    "flight_number": 44,
    "mission_name": "Intelsat 35e",
    "launch_date_utc": "2017-07-05T23:35:00.000Z"
  },
  {
    "flight_number": 45,
    "mission_name": "CRS-12",
    "launch_date_utc": "2017-08-14T16:31:00.000Z"
  },
  {
    "flight_number": 46,
    "mission_name": "FormoSat-5",
    "launch_date_utc": "2017-08-24T18:50:00.000Z"
  },
  {
    "flight_number": 47,
    "mission_name": "Boeing X-37B OTV-5",
    "launch_date_utc": "2017-09-07T13:50:00.000Z"
  },
  {
    "flight_number": 48,
    "mission_name": "Iridium NEXT Mission 3",
    "launch_date_utc": "2017-10-09T12:37:00.000Z"
  },
  {
    "flight_number": 49,
    "mission_name": "SES-11 / Echostar 105",
    "launch_date_utc": "2017-10-11T22:53:00.000Z"
  },
  {
    "flight_number": 50,
    "mission_name": "KoreaSat 5A",
    "launch_date_utc": "2017-10-30T19:34:00.000Z"
  },
  {
    "flight_number": 51,
    "mission_name": "CRS-13",
    "launch_date_utc": "2017-12-15T15:36:00.000Z"
  },
  {
    "flight_number": 52,
    "mission_name": "Iridium NEXT Mission 4",
    "launch_date_utc": "2017-12-23T01:27:23.000Z"
  },
  {
    "flight_number": 53,
    "mission_name": "ZUMA",
    "launch_date_utc": "2018-01-08T01:00:00.000Z"
  },
  {
    "flight_number": 54,
    "mission_name": "SES-16 / GovSat-1",
    "launch_date_utc": "2018-01-31T21:25:00.000Z"
  },
  {
    "flight_number": 55,
    "mission_name": "Falcon Heavy Test Flight",
    "launch_date_utc": "2018-02-06T20:45:00.000Z"
  },
  {
    "flight_number": 56,
    "mission_name": "Paz / Starlink Demo",
    "launch_date_utc": "2018-02-22T14:17:00.000Z"
  },
  {
    "flight_number": 57,
    "mission_name": "Hispasat 30W-6",
    "launch_date_utc": "2018-03-06T05:33:00.000Z"
  },
  {
    "flight_number": 58,
    "mission_name": "Iridium NEXT Mission 5",
    "launch_date_utc": "2018-03-30T14:13:51.000Z"
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "launch_date_utc": "2018-04-02T20:30:41.000Z"
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "launch_date_utc": "2018-04-18T22:51:00.000Z"
  },
  {
    "flight_number": 61,
    "mission_name": "Bangabandhu-1",
    "launch_date_utc": "2018-05-11T20:14:00.000Z"
  },
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "launch_date_utc": "2018-05-22T19:47:58.000Z"
  },
  {
    "flight_number": 63,
    "mission_name": "SES-12",
    "launch_date_utc": "2018-06-04T04:45:00.000Z"
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "launch_date_utc": "2018-06-29T09:42:00.000Z"
  },
  {
    "flight_number": 65,
    "mission_name": "Telstar 19V",
    "launch_date_utc": "2018-07-22T05:50:00.000Z"
  },
  {
    "flight_number": 66,
    "mission_name": "Iridium NEXT Mission 7",
    "launch_date_utc": "2018-07-25T11:39:26.000Z"
  },
  {
    "flight_number": 67,
    "mission_name": "Merah Putih",
    "launch_date_utc": "2018-08-07T05:18:00.000Z"
  },
  {
    "flight_number": 68,
    "mission_name": "Telstar 18V",
    "launch_date_utc": "2018-09-10T04:45:00.000Z"
  },
  {
    "flight_number": 69,
    "mission_name": "SAOCOM 1A",
    "launch_date_utc": "2018-10-08T02:22:00.000Z"
  },
  {
    "flight_number": 70,
    "mission_name": "Es’hail 2",
    "launch_date_utc": "2018-11-15T20:46:00.000Z"
  },
  {
    "flight_number": 71,
    "mission_name": "SSO-A",
    "launch_date_utc": "2018-12-03T18:34:00.000Z"
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "launch_date_utc": "2018-12-05T18:16:00.000Z"
  },
  {
    "flight_number": 73,
    "mission_name": "GPS III SV01",
    "launch_date_utc": "2018-12-23T13:51:00.000Z"
  },
  {
    "flight_number": 74,
    "mission_name": "Iridium NEXT Mission 8",
    "launch_date_utc": "2019-01-11T15:31:00.000Z"
  },
  {
    "flight_number": 75,
    "mission_name": "Nusantara Satu (PSN-6) / S5 / Beresheet",
    "launch_date_utc": "2019-02-22T01:45:00.000Z"
  },
  {
    "flight_number": 76,
    "mission_name": "CCtCap Demo Mission 1",
    "launch_date_utc": "2019-03-02T07:45:00.000Z"
  },
  {
    "flight_number": 77,
    "mission_name": "ArabSat 6A",
    "launch_date_utc": "2019-04-11T22:35:00.000Z"
  },
  {
    "flight_number": 78,
    "mission_name": "CRS-17",
    "launch_date_utc": "2019-05-04T06:48:00.000Z"
  },
  {
    "flight_number": 79,
    "mission_name": "Starlink v0.9",
    "launch_date_utc": "2019-05-24T02:30:00.000Z"
  },
  {
    "flight_number": 80,
    "mission_name": "RADARSAT Constellation",
    "launch_date_utc": "2019-06-12T14:17:00.000Z"
  },
  {
    "flight_number": 81,
    "mission_name": "STP-2",
    "launch_date_utc": "2019-06-25T03:30:00.000Z"
  },
  {
    "flight_number": 82,
    "mission_name": "CRS-18",
    "launch_date_utc": "2019-07-25T22:01:00.000Z"
  },
  {
    "flight_number": 83,
    "mission_name": "Amos-17",
    "launch_date_utc": "2019-08-06T22:52:00.000Z"
  },
  {
    "flight_number": 84,
    "mission_name": "Starlink 1",
    "launch_date_utc": "2019-11-11T14:56:00.000Z"
  },
  {
    "flight_number": 85,
    "mission_name": "CRS-19",
    "launch_date_utc": "2019-12-05T17:29:23.000Z"
  },
  {
    "flight_number": 86,
    "mission_name": "JCSat 18 / Kacific 1",
    "launch_date_utc": "2019-12-17T00:10:00.000Z"
  },
  {
    "flight_number": 87,
    "mission_name": "Starlink 2",
    "launch_date_utc": "2020-01-07T02:19:00.000Z"
  },
  {
    "flight_number": 88,
    "mission_name": "Crew Dragon In Flight Abort Test",
    "launch_date_utc": "2020-01-19T14:00:00.000Z"
  },
  {
    "flight_number": 89,
    "mission_name": "Starlink 3",
    "launch_date_utc": "2020-01-29T14:06:00.000Z"
  },
  {
    "flight_number": 90,
    "mission_name": "Starlink 4",
    "launch_date_utc": "2020-02-17T15:05:55.000Z"
  },
  {
    "flight_number": 91,
    "mission_name": "CRS-20",
    "launch_date_utc": "2020-03-07T04:50:31.000Z"
  },
  {
    "flight_number": 92,
    "mission_name": "Starlink 5",
    "launch_date_utc": "2020-03-18T12:16:00.000Z"
  },
  {
    "flight_number": 93,
    "mission_name": "Starlink 6",
    "launch_date_utc": "2020-04-01T00:00:00.000Z"
  },
  {
    "flight_number": 94,
    "mission_name": "SAOCOM 1B & Smallsat Rideshare 1",
    "launch_date_utc": "2020-04-01T00:00:00.000Z"
  },
  {
    "flight_number": 95,
    "mission_name": "GPS III SV03 (Columbus)",
    "launch_date_utc": "2020-04-29T11:00:00.000Z"
  },
  {
    "flight_number": 96,
    "mission_name": "CCtCap Demo Mission 2",
    "launch_date_utc": "2020-05-01T00:00:00.000Z"
  },
  {
    "flight_number": 97,
    "mission_name": "ANASIS-II",
    "launch_date_utc": "2020-04-01T00:00:00.000Z"
  },
  {
    "flight_number": 98,
    "mission_name": "Starlink 7",
    "launch_date_utc": "2020-04-01T00:00:00.000Z"
  },
  {
    "flight_number": 99,
    "mission_name": "Starlink 8",
    "launch_date_utc": "2020-04-01T00:00:00.000Z"
  },
  {
    "flight_number": 100,
    "mission_name": "GPS III SV04",
    "launch_date_utc": "2020-08-01T00:00:00.000Z"
  },
  {
    "flight_number": 101,
    "mission_name": "USCV-1 (NASA Crew Flight 1)",
    "launch_date_utc": "2020-08-01T00:00:00.000Z"
  },
  {
    "flight_number": 102,
    "mission_name": "SXM-7",
    "launch_date_utc": "2020-01-01T00:00:00.000Z"
  },
  {
    "flight_number": 103,
    "mission_name": "SXM-8",
    "launch_date_utc": "2020-07-01T00:00:00.000Z"
  },
  {
    "flight_number": 105,
    "mission_name": "GPS SV05",
    "launch_date_utc": "2020-09-01T00:00:00.000Z"
  },
  {
    "flight_number": 105,
    "mission_name": "CRS-21",
    "launch_date_utc": "2020-10-20T00:00:00.000Z"
  },
  {
    "flight_number": 106,
    "mission_name": "Smallsat SSO Rideshare 2 (Mission 9)",
    "launch_date_utc": "2020-10-01T00:00:00.000Z"
  },
  {
    "flight_number": 107,
    "mission_name": "Turksat 5A",
    "launch_date_utc": "2020-10-01T00:00:00.000Z"
  }
];

const fetchItemsReducer = (state = initData, action)=>{
    switch(action.type){
      case C.SHOW_ALL:
        return initData;
        case C.SORT_ASC:
            return initData;
        case C.SORT_DESC:
            return initData.slice().reverse();
        case C.FILTER_YEAR:
         return initData.filter(
            t => new Date(t.launch_date_utc).getFullYear() === action.filterYear
          );
        default:
            return state
    }
}

export default fetchItemsReducer