import React from "react";
import styles from "./Picture.module.css";
import picture from "../../image/dish2(1).jpg";

function Picture () {
    return(
        <div className={styles.main}> 
            <div className={styles.picture}> 
                <p className={styles.paragraph1}>DELECIOUS RECIPES.</p>
                <p className={styles.paragraph2}>FOR EVERY DAY.</p>
                <p className={styles.paragraph3}>FOR EVERYONE.</p> 
            </div>
            <img className={styles.image} src={picture}/>
        </div>
    )
}

export default Picture