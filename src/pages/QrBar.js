import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import style from "./QrBar.module.css";

function QrBar() {

    const navigate = useNavigate() ;

    const onClickNexStage =  () => {navigate("/receipt")}

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
            <div className={style.QR배경}>
                <div className={style.QrBar} onClick={onClickNexStage}>
                <img src="/images/QR코드.jpg" className={style.QR코드} />
                </div>
                <div className={style.BaCord} onClick={onClickNexStage}>
                <img src="/images/바코드.jpg" className={style.바코드} />
                </div>
                <h1>QR스캔 또는 바코드를 스캔해주세요</h1>
                <h1> 결제를 진행합니다</h1>
            </div>
        </>
    );
}

export default QrBar;