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
            <div className={style.baegyung}>
                <div className={style.노랑바}>
                    <h1 className={style.큐알바코드}>QR / 바코드 결제</h1>
                </div>
                <div className={style.큐알바정렬}>
                <img src="../images/qr코드.png" className={style.QR}/>
                <img src="../images/바코드.png" className={style.BAR}/>
                
                </div>
                <h1>QR 또는 바코드 스캔을 진행해주세요</h1>
            </div>
        </>
    );
}

export default AppCard;