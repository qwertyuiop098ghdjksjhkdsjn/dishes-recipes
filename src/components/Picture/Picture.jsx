import React from "react";
import styles from "./Picture.module.css";
import picture from "../../image/dish2(1).jpg";
import pictureMedia from "../../image/dish4.jpg"

function Picture () {
    return(
        <div className={styles.main}> 
        <div className={styles.text}>
            <div className={styles.picture}> 
                <p className={styles.paragraph1}>DELECIOUS RECIPES.</p>
                <p className={styles.paragraph2}>FOR EVERY DAY.</p>
                <p className={styles.paragraph3}>FOR EVERYONE.</p> 
            </div>
        </div>
            
            <img className={styles.image} src={picture}/>
            <img className={styles.imageMedia} src={pictureMedia}/>
        </div>
    )
} 

export default Picture