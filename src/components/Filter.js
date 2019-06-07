import React, {Component} from 'react';


let Filter = (props) => {
    
    return (
        <div>
            <select onChange={props.beans}>
            <option value={"name"}>Name</option>
            <option value={'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'}>Weight</option>
            </select>
            <br></br>
            <input type={"checkbox"} onClick={props.handleClick}></input> {"greased"}
        </div>

        
    )
}



export default Filter