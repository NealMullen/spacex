import React from "react";
import reloadIcon from "../../assets/icon/refresh.png";
import {refresh} from "../../actions";
import { useDispatch } from "react-redux";

function RefreshButton(props){
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(refresh(props.type));
    };
    return(
        <button className="btn action refresh" onClick={handleClick}>
          <span>Reload data</span> <img src={reloadIcon} alt="" />
        </button>
    )
}
export default RefreshButton;