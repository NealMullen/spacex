import C from "../constants";

const apiConfig ={
    baseUrl: "https://api.spacexdata.com/v3/",
    [C.LAUNCH_API]:{
        url: "launches",
        filter: [
            "flight_number","mission_name","launch_date_utc","rocket"
        ],
        filterByYear : true
    },
    [C.MISSIONS_API]:{
        url: "missions",
        filter: [
            "mission_name","mission_id","description"
        ]
    }
}

export default apiConfig;