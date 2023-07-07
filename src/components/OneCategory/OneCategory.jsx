import React from "react";
import styles from "./OneCategory.module.css"; 
import { Link } from "react-router-dom";


// { 
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
//     },

function OneCategory ({info}) {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={info.strCategoryThumb}/>
            <h5 className={styles.headline}>{info.strCategory}</h5>
            <p>{info.strCategoryDescription.slice(0, 200)}...</p>
            <Link to={"/categories/" + info.strCategory} className={styles.button}>view recipes</Link>
        </div> 
    )
}

export default OneCategory