import C from '../constants'
const filterByYearReducer = (state = null, action)=>{
    switch(action.type){
        case C.FILTER_YEAR:
            return action.filterYear;
        case C.SHOW_ALL:
            return state
        default:
            return state
    }
}

export default filterByYearReducer