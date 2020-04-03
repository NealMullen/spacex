import React from 'react'
import ApiItem from './ApiItem'

class ApiItemList extends React.Component{

    constructor(props){
        super(props);
        this.state ={}

        this.callApi = this.callApi.bind(this);
    }

    componentDidMount(){
        this.callApi();
    }

    callApi(){
        fetch(
            "https://api.spacexdata.com/v3/launches?filter=flight_number,mission_name,launch_date_utc&pretty=true")
            .then((response) => {
              return response.json();
            })
            .then((api) => {
              this.setState({ data: api });
            });
    }
    render() {
        return (
          <ol>
            {(this.state.data || []).map((item, i) => (
              <ApiItem key={i} {...item} />
            ))}
          </ol>
        );
      }
}

export default ApiItemList