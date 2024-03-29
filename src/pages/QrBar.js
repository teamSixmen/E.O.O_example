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
            }, 1000000);

            return () => {
                clearInterval(timer);
            }
        },
        []
    );

    return (
        <>
            <div className={style.배경}>
                <div className={style.옐로바}>QR / 바코드 결제</div>
                    <div className={style.정렬}>
                        <div className={style.Qr}>
                            <img src="../images/QR코드2.png"/>
                            <p>QR 스캔</p>
                        </div>
                        <div className={style.BarCord}>
                            <img src="../images/바코드수정.PNG"/>
                            <p>바코드를 읽혀주세요.</p>
                        </div>
                    </div>
                        <div className={style.텍스트}>
                            <h1>간편 결제 수단을 선택해주세요.</h1>
                        </div>
            </div>
        </>
    );
}

export default QrBar;