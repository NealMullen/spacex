import C from '../constants'


const getUniqueYear = (api) => {
    let dateList = new Set();
    let dates = [{value:null,label:"All"}];
    api.forEach(function (apiItem) {
      var date = new Date(apiItem.launch_date_utc);
      dateList.add(date.getFullYear());
    });
      dateList.forEach((date) => {
        dates.push({ value: date, label: date });
      });
      return dates;
  } 
export const Actions = {
    
    fetchPosts(){
        return function(dispatch){
            fetch(`https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_utc&pretty=true`)
            .then(res => res.json())
            .then(posts => {
               var dates = getUniqueYear(posts);
               console.log(dates);
               dispatch({
                type:C.FETCH_DATA,
                payload: posts
            });

            dispatch({
                type:C.GET_UNIQUE_YEARS,
                payload: dates
            });

        }
        )
        }
    },

    filterYear(year){
        return function(dispatch){
            dispatch({
                type:C.FILTER_YEAR,
                payload:  year
            });
        }
    },
    sortByDesc(){
        return{
                type:C.SORT_DESC,
        }
    },
    sortByAsc(){
        return{
                type:C.SORT_ASC,
            }
    }
}