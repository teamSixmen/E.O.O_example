import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import style from "./Style.module.css";

function Card() {

    const navigate = useNavigate();

    useEffect(
        () => {
            const timer = setInterval(() => {
                navigate("/receipt");
            }, 15000);

            return () => {
                clearInterval(timer);
            }
        },
        []
    );

    return (
        <>
            <div className={style.Back}>
                <div className={style.CardBlank}></div>
                <img src="/images/temp.jpg" width="400px"/>
                <h1>카드를 넣어주세요</h1>
                <h1>카드 결제를 진행합니다.</h1>
            </div>
        </>
    );
}

export default Card;