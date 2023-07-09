import React, { useEffect, useState } from "react";
import OneCategory from "../OneCategory/OneCategory"
import styles from "./Categories.module.css";

function Categories (props) {

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Categories</h3>
            <div className={styles.main}>{props.info.map((item)=> <OneCategory key={item.idCategory} info={item}/>)}</div>
        </div>
    ) 
}   

export default Categories