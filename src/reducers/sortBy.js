import C from '../constants'
const sortByReducer = (state = C.SORT_ASC, action)=>{
    switch(action.type){
        case C.SORT_ASC:
            return C.SORT_ASC;
        case C.SORT_DESC:
            return C.SORT_DESC;
        default:
            return state
    }
}

export default sortByReducer