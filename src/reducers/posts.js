import C from '../constants'

const initialState = [];

const postReducer = (state = initialState, action) =>{
  
  switch(action.type){
      case C.FETCH_DATA:
       return action.payload
      default:
          return state;
  }

}

export default postReducer;