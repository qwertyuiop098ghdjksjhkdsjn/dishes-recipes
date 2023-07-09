import React from "react";
import styles from "./OneRecipe.module.css";
import { Link } from "react-router-dom";

function OneRecipe ({information}) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
            <img className={styles.image} src={information.strMealThumb}/>
            <p className={styles.p}>{information.strMeal}</p>
            <Link to={"/recipes/" + information.idMeal} className={styles.button}>view recipe</Link>
        </div> 
        </div>
        
    ) 
} 
  
export default OneRecipe 