import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import style from "./Start.module.css";

function Start({here, setHere, setSelectedItems}) {

    useEffect(
        () => {
            setSelectedItems([]);
        },
        []
    );
    
    const navigate = useNavigate();

    const onClickHere = () => {
        setHere(true);
        navigate("menu/burgermenu");
    };

    const onClickGo = () => {
        setHere(false);
        navigate("menu/burgermenu");
    };

    const onClickHandler = () => {
        navigate("/help")
    };

    return (
        <>
            <div className={style.adv}></div>
            <div className={style.empolyeeCall}>
                <button onClick={onClickHandler}>
                    <span>💇‍♀️</span>
                    <br/>
                    직원호출
                </button>
            </div>
            <div className={style.text}>
                <p>현금 및 기타 결제는 카운터에서 진행해주세요.</p>
            </div>
            <div className={style.choice}>
                <button 
                    onClick={onClickHere}
                    className={style.Box}
                >
                    <span>매장<br/>
                    <small>Eat In</small>
                    </span>
                </button>
                <button 
                    onClick={onClickGo}
                    className={style.Box}
                >
                    <span>포장<br/>
                    <small>Take Out</small>
                    </span>
                </button>
            </div>
        </>
    );
}

export default Start;