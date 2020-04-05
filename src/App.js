import React from 'react';
import ApiItemList from './Components/ApiItemList'
import {useSelector, useDispatch} from 'react-redux';
import {Actions as a} from './actions'
import C from './constants'
import Select from 'react-select';

const options = [
  { value: null, label: 'All' },
  { value: 2006, label: 'Chocolate' },
  { value: 2007, label: 'Strawberry' },
  { value: 2010, label: 'Vanilla' },
];
 let selectedOption = null;

function App() {
  const sortBy = useSelector(state => state.sortBy)

  const dispatch = useDispatch();
  const dispatchAction = sortBy === C.SORT_ASC ? a.sortByDesc() : a.sortByAsc();
  let sortByText = sortBy === C.SORT_ASC ? "Sort Descending" : "Sort Ascending";
  const year = useSelector(state => state.filterByYear)

  const handleChange = (val) =>{
    if(val.value === null){
      dispatch(a.showAll());
    }
    else{
      dispatch(a.filterByYear(val.value));

    }
 //  console.log(year);
    //selectedOption = val;
  }

  return (
    <div>
      <p>{sortBy}</p>
      <button onClick={()=> dispatch(dispatchAction)}>{sortByText}</button>
      <Select
        value={year}
        onChange={handleChange}
        options={options}
      />
    
      <ApiItemList />
    </div>
  );
}


export default App;
