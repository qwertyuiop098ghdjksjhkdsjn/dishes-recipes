import styles from "./Recipes.module.css";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import OneRecipe from "../OneRecipe/OneRecipe";

function Recipes () {
    const {category} = useParams();
    const [recipes, setRecipes] = useState([]); 

    const URL = "https://www.themealdb.com/api/json/v1/1/"
    function getRecipes () {
        fetch(URL + "filter.php?c=" + category).then(res => res.json()).then(res =>setRecipes(res.meals))
    } 
    console.log(recipes)
    useEffect(()=> {getRecipes()}, [])

    const navigate = useNavigate(); 
        function Navigation (){
            navigate(-1) 
        }

  
    return(
        <div className={styles.container}>
        <button  
        className={styles.back}
        onClick={Navigation}>Back</button>
        <h4 className={styles.chosenCategory}>{category}</h4>
        <div className={styles.main}>{recipes.map((item) => <OneRecipe key={item.idCategory} information={item}/>)}</div>
        </div>
        
    )
} 

export default Recipes; 