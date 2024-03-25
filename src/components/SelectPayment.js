import { useState } from "react";

import { useNavigate } from "react-router-dom";

import style from "./SelectPayment.module.css";

function SelectPayment() {
    
    const [checked, setChecked] = useState("card");
    
    const navigate = useNavigate();

    const onClickRadio = e => {
        // console.log(e.target.value);
        setChecked(e.target.value);
    };

    const onClickHandler = () => {

        (checked === "card")? navigate("/pay/card"):navigate("/pay/appcard")
        setChecked("card");
    };
    
    const onClickCancel = () => navigate("/menu/burgermenu");

    const direction = (checked === "app")? "/images/vector05.png":"/images/vector04.png";

    return (
        <>
            <div className={style.PaymentBox}>
                <div className={style.BlankBox}></div>
                <div className={style.TopBox}>
                    <label 
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
                                onClick={onClickRadio}
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
                                onClick={onClickRadio}
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
                        onClick={onClickCancel}
                        className={style.CancelBox}
                    >
                        취소
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectPayment;