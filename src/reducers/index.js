import counterReducer from './counter'
import sortByReducer from './sortBy'
import fetchItemsReducer from './fetchItems'
import filterByYearReducer from './filterByYear'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    sortBy: sortByReducer,
    posts: fetchItemsReducer,
    filterByYear: filterByYearReducer,
})

export default allReducers;