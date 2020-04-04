import React from "react";
import ApiItem from "./ApiItem";
import Select from "react-select";

class ApiItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: "ASC",
      selectedOption: null,
      apiResponse: null,
      renderedResponse:null,
      uniqueYears: [],
      defaultOption: [{ value: null, label: "Filter by year" }],
      options: [],
    };

    this.callApi = this.callApi.bind(this);
    this.sort = this.sort.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }

  // Let's call the API when the component mounts
  componentDidMount() {
    this.callApi();
  }

  doUpdate(api,refresh = false){
    if(refresh === false){
      // Let's create a unique list of years from the data for our select dropdown
      this.getUniqueYear(api);
    }
      // We'll set the apiResponse state to our api response
      let val = this.state.selectedOption === null ? null : this.state.selectedOption.value;
      let listByYear = this.getByYear(val);
      this.setState({ data: listByYear });
  }
  
  callApi(refresh = false) {
    // Lets fetch the data
    fetch(
      `https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_utc&pretty=true&order=${this.state.sortedBy.toLowerCase()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((api) => {
        this.setState({apiResponse: api});
        this.doUpdate(api,refresh);
      });
  }
  
  getAll(){
    return this.state.apiResponse;
  }

  getByYear(year){
    if(year === null) return this.getAll();
    else{
      let sortedList = [];
      this.state.apiResponse.forEach((item) => {
        if(new Date(item.launch_date_utc).getFullYear() === year) {
          sortedList.push(item);
        }
      });
      return sortedList;
    }
  }
  
  handleChange(selectedOption) {
    let listByYear = this.getByYear(selectedOption.value);
    this.setState({ data: listByYear, selectedOption});

  }

  sort() {
    this.setState({
      data: this.state.data.slice().reverse(),
      apiResponse: this.state.apiResponse.slice().reverse(),
      sortedBy: this.state.sortedBy === "ASC" ? "DESC" : "ASC",
    });
  }

  getUniqueYear(api) {
    let dateList = new Set();
    let dates = [];
    api.forEach(function (apiItem) {
      var date = new Date(apiItem.launch_date_utc);
      dateList.add(date.getFullYear());
    });
      dateList.forEach((date) => {
        dates.push({ value: date, label: date });
      });
      this.setState({
        uniqueYears: dates,
        options: [...this.state.defaultOption, ...dates],
      });
  }

  refreshList() {
    this.callApi(true);
  }

  render() {
    const selectedOption = this.state.selectedOption;
    return (
      <div>
        <button id="refresh" onClick={this.refreshList}>
          Refresh
        </button>

        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.state.options}
          placeholder="Filter by year"
        />

        <button id="sort" onClick={this.sort}>
          {this.state.sortedBy === "ASC" ? "Sort Descending" : "Sort Ascending"}
        </button>
        <ol>
          {(this.state.data || []).map((item, i) => (
            <ApiItem key={i} {...item} />
          ))}
        </ol>
      </div>
    );
  }
}

export default ApiItemList;
