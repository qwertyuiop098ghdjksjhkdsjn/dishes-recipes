import React from "react";
import styles from "./Header.module.css"
import picture from "../../image/photo1.png";
import {useNavigate} from "react-router-dom";

function Header () {

    const navigate = useNavigate(); 

    function main () { 
            navigate("/")
    }

    function about () {
        navigate("/about/")
    }
  

    return (
        <div className={styles.block}>
            <header className={styles.header}>
                <div className={styles.container}>
                <img className={styles.img} src={picture}/>
                <button onClick={main} className={styles.h}>Meal</button>
                </div>
                <div className={styles.info}>
                <h4 onClick={about} className={styles.about}>About our site</h4>
                </div>
                
            </header> 
            </div>
            
    )
} 

export default Header; 