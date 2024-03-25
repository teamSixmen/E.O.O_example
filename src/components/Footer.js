import { useNavigate } from "react-router-dom";
import {useState} from 'react';

import style from "./Footer.module.css"

function Footer() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/help")
    };

    const [순서, set순서] = useState(1);

    return (
        <>
            <div className={style.FooterBox}>
                
                <div onClick={onClickHandler}
                    className={style.CallBox}
                >
                    <img src="/images/vector02.png"/>
                </div>
                <div className={style.단계이미지}>
                    <div className={style.단계}>
                        <p>메뉴선택</p>
                        <div className={순서 >= 1 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문내역</p>
                        <div className={순서 >= 2 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>결제</p>
                        <div className={순서 >= 3 ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문완료</p>
                        <div className={순서 >= 4 ? style.주황 : style.회색}></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;