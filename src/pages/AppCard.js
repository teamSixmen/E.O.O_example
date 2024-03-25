import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import style from "./Style.module.css";

function AppCard() {

    const navigate = useNavigate();

    useEffect(
        () => {
            const timer = setInterval(() => {
                navigate("/receipt");
            }, 15000);
            
            return () => {
                clearInterval(timer);
            };
        },
        []
    );

    return (
        <>
            <div className={style.Back}>
                <div className={style.AppBlank}></div>
                <img src="/images/temp.jpg" width="400px"/>
                <h1>QR 또는 바코드 스캔을 진행해주세요</h1>
            </div>
        </>
    );
}

export default AppCard;