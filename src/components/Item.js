import React from "react";

const Item = (props) => (
    
    <div className="max-w-sm h-full rounded overflow-hidden shadow-lg relative" >
        <img className="w-full h-full" src={`https://media.giphy.com/media/${props.id}/giphy.gif`} alt=""/>
        <p className="absolute bottom-0 left-0 text-left text-white font-bold">
            {props.name}
        </p>
    </div>

)

export default Item