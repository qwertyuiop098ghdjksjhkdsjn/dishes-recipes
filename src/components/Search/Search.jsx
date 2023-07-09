import React, { useEffect, useState } from "react";
import style from "./Search.module.css"; 
import { useNavigate } from "react-router-dom";

function Search () {

    const [input, setInput] = useState("");

    const navigate = useNavigate (); 

    function doSearch () {
        navigate ("/search/" + input)
    } 
     

    return (
        <div className={style.container}>
            <input placeholder="Search recipes, for example — Arrabiata" 
            type="text" 
            value={input} 
            onChange={(event) => setInput(event.target.value)}
            className={style.text}/>

            <input placeholder="Search recipes" 
            type="text" 
            value={input} 
            onChange={(event) => setInput(event.target.value)}
            className={style.text2}/>

            <button className={style.button} onClick={doSearch}>Search</button>
        </div> 
    )
}

export default Search