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

    return (
        <>
            <div>
                <img 
                    src="/images/start.png"
                />
            </div>
            <div className={style.Text}>
                <h1>현금 및 기타 결제는 카운터에서 진행해주세요.</h1>
            </div>
            <div 
                onClick={onClickHere}
                className={style.Box}
            >
                <h1>매장</h1>
            </div>
            <div 
                onClick={onClickGo}
                className={style.Box}
            >
                <h1>포장</h1>
            </div>
        </>
    );
}

export default Start;