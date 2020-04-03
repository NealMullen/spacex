import React from 'react'
import ApiItem from './ApiItem'

class ApiItemList extends React.Component{

    constructor(props){
        super(props);
        this.state ={}
    }

    componentDidMount(){
        this.callApi();
    }

    callApi(){
        
    }
    render(){
        return(
            // FOR EACH ITEM IN THE LIST - DO ITEM
            <ApiItem />
        )
    }
}

export default ApiItemList