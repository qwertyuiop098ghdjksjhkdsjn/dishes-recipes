import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    return (
        <div>
            <p>{search.map((search) => <div className={style.main}>
                <h4 className={style.h}>{search.strMeal}</h4>
                <div className={style.container}><img src={search.strMealThumb}/>
                <p>{search.strInstructions}</p></div>
                </div>)}</p>
        </div>
    )
}

export default SearchResult