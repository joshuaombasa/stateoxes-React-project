import React from "react";

export default function Box(props) {
    
    const styling = {backgroundColor: props.on ?  "#222222" : ""}

    return (
        <div className="box" style={styling}></div>
    )
}