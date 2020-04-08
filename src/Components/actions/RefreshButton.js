import React from "react";
import reloadIcon from "../../assets/icon/refresh.png";
import * as a from "../../actions";
import { useDispatch } from "react-redux";

function RefreshButton(props){
    const dispatch = useDispatch();
    const refresh = () => {
        dispatch(a.refresh(props.type));
    };
    return(
        <button className="btn action refresh" onClick={refresh}>
          <span>Reload data</span> <img src={reloadIcon} alt="" />
        </button>
    )
}
export default RefreshButton;