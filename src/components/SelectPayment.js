import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import style from "./SelectPayment.module.css";

function SelectPayment({ selectedItems, change }) {
    
    const [checked, setChecked] = useState("card");
    
    const navigate = useNavigate();

    const onClickHandler = () => {

        (checked === "card")? navigate("/pay/card"):navigate("/pay/appcard")
        setChecked("card");
    };

    let totalPrice = 0;

    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    );
    
    const direction = (checked === "app")? "/images/vector05.png":"/images/vector04.png";

    return (
        <>
            <div className={style.PaymentBox}>
                <div className={style.결제수단}>
                    <p>결제 수단을 선택해주세요&nbsp;:&nbsp;
                        <span>{totalPrice? `${parseInt(totalPrice / 1000)},`:"" }{totalPrice? ((totalPrice % 1000)? totalPrice % 1000: "000"): "0"}원</span>
                    </p>
                </div>
                <div className={style.TopBox}>
                    <label className={style.label}
                        htmlFor="card"
                    >
                        <div 
                            className={style.CheckBox}
                            style={{backgroundColor: (checked === "card")? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                        >
                            <img 
                                src="/images/vector03.png"
                                className={style.Vector}
                                width="60px"
                            />
                            <br/><br/>체크/신용 카드<br/>
                            <input 
                                id="card"
                                name="cardOrApp" 
                                type="radio"
                                value="card"
                                defaultChecked
                                onClick={e => setChecked(e.target.value)}
                            />
                        </div>
                    </label>
                    <label 
                        htmlFor="app"
                    >
                        <div 
                            className={style.CheckBox}
                            style={{backgroundColor: (checked === "app")? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                        >
                            <img src={direction} width="60px"/>
                            <br/><br/>앱카드<br/>
                            <input 
                                id="app"
                                name="cardOrApp" 
                                type="radio"
                                value="app"
                                onClick={e => setChecked(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className={style.BottomBox}>
                    <div 
                        onClick={onClickHandler}
                        className={style.AcceptBox}
                    >
                        결제하기
                    </div>
                    <div 
                        onClick={() => navigate("/menu/burgermenu")}
                        className={style.CancelBox}
                    >
                        더 담기
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectPayment;