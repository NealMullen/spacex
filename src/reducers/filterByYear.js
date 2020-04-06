import C from '../constants'

const initialState = null;
const filterByYearReducer = (state = initialState, action) =>{
    switch(action.type){
        case C.FILTER_YEAR:
         return action.payload
        default:
            return state;
    }
}

export default filterByYearReducer