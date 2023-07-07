import React from "react";
import style from "./Footer.module.css";
import icon from "./../../image/instagram.svg";
import telegram from "./../../image/telegram.svg";

function Footer () {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <p className={style.text}>follow us on Instagram</p>
                <a href="https://www.instagram.com/?hl=ru" target="_blank"><img className={style.icon} src={icon}/></a>
                <p className={style.text2}>more recipes in Telegram</p>
                <a href="https://web.telegram.org/k/" target="_blank"><img className={style.iconTelega} src={telegram} href="https://www.instagram.com/?hl=ru"/></a>
            </div>
        </div>
    )
}


export default Footer