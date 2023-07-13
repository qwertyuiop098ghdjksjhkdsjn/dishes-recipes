import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./SearchResult.module.css";

function SearchResult () {

    
    const [search, setSearch] = useState([]);

    const {query} = useParams (); 

    function doSearch () {
        const URL = "https://www.themealdb.com/api/json/v1/1/"
        fetch(URL + "search.php?s=" + query).then((res)=> res.json()).then(res => setSearch(res.meals))
    } 

    console.log(search)

    useEffect(()=> doSearch (), [])

    const navigate = useNavigate()
    function Navigation (id) {
        navigate("/recipes/" + id)
    }

    return (
        <div className={style.container1}>
            {search.map((search) => 
            <div className={style.main}>
                <h4 className={style.h}>{search.strMeal}</h4>
                <div className={style.container}>
                    <img src={search.strMealThumb}/>
                    <p>{search.strInstructions.slice(0, 400)}...</p>
                    <button className={style.button} onClick={()=> Navigation(search.idMeal)}>show full recipe</button>
                </div>
                </div>)}
        </div>
    )
}

export default SearchResult