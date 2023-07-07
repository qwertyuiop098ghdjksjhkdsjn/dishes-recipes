import React from "react";
import style from "./About.module.css"; 
import image from "./../../image/lifemagazine.gr-5-32.jpg"

function About () {
    return (
        <div>
            <img className={style.img} src={image}/>
            <p className={style.text}>This site will help you find delicious recipes for every day. 
            There are 14 categories of dishes to choose from. And plenty of recipes options for each category.
            <br/>Dishes are suitable for a holiday, a special occasion, and for everyday lunch.
            These recipes are for everyone and for every day.</p>
        </div>
    )
}

export default About; 