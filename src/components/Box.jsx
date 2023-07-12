import React from "react";

export default function Box({box, toggle}) {
    
    const styling = {backgroundColor: box.on ?  "#222222" : ""}

    return (
        <div 
        className="box" 
        style={styling} 
        onClick={() => toggle(box.id)}></div>
    )
}