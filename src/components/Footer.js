import { useNavigate, useLocation } from "react-router-dom";

import {useState} from 'react';

import style from "./Footer.module.css"

function Footer() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/help")
    };

    const { pathname } = useLocation();
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
                        <div className={ pathname === '/menu/burgermenu'
                                        || pathname === '/menu/chickenmenu'
                                        || pathname === '/menu/setmenu'
                                        || pathname === '/menu/sidemenu'
                                        || pathname === '/menu/drinkmenu'
                                        ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문내역</p>
                        <div className={ pathname === '/order' ? style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>결제</p>
                        <div className={ pathname === '/pay/card' || pathname === '/pay/appcard' || pathname === '/pay/qrBar'?
                                        style.주황 : style.회색}></div>
                    </div>
                    <div className={style.단계}>
                        <p>주문완료</p>
                        <div className={ pathname === '/receipt' ? style.주황 : style.회색}></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Footer;