
import React from 'react'

// Deonstruct the array we passed over form the list component
const ApiItem =({flight_number, mission_name, launch_date_utc}) => 
    <li>
    <span>{flight_number}</span>
    <span>{mission_name}</span>
    <span>{launch_date_utc}</span>
    </li>

export default ApiItem
