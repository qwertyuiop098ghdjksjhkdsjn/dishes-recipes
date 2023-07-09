import React, { useEffect, useState } from "react";
import styles from "./ReadRecipe.module.css";
import { useNavigate, useParams } from "react-router-dom";


function ReadRecipe (props) {
    const {recipe} = useParams();
    const [instructions, setInstructions] = useState([]); 

    const URL = "https://www.themealdb.com/api/json/v1/1/" 

    function getRrecipeInstuctions () {
        fetch(URL + "lookup.php?i=" + recipe).then(res => res.json()).then(res => setInstructions(res.meals[0]))
    }

    console.log(instructions);
    useEffect(() => {getRrecipeInstuctions()}, [])

    
        const navigate = useNavigate(); 
        function Navigation (){
            navigate(-1)
        }

    return (
    <div className={styles.main}> 
        <div>
            <button className={styles.button} onClick={Navigation}>Back</button>
            <h1 className={styles.headline}>{instructions.strMeal}</h1>
        </div>
       
        <div className={styles.container}>
            <img className={styles.image} src={instructions.strMealThumb}/>
            <p className={styles.text}>{instructions.strInstructions}</p>
        </div>
        
    </div>
    )

}
 
export default ReadRecipe; 