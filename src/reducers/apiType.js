import C from '../constants'

const initialState = C.LAUNCH_API;
const apiTypeReducer = (state = initialState, action) =>{
    switch(action.type){
        case "TYPE":
         return action.payload
        default:
            return state;
    }
}

export default apiTypeReducer