import { useNavigate } from "react-router-dom";

import style from "./Order.module.css";

function Order({ selectedItems }) {
    
    const navigate = useNavigate();
    
    const onClickHander = () => {
    
        (selectedItems.length)? navigate("/order"):alert("shoping list is empty");
    }

    return (
        <>
            <div className={style.Box}>
                <div className={style.Blank}></div>
                <div
                    onClick={onClickHander}
                    className={style.Button}
                >
                    주문하기
                </div>
            </div>
        </>
    );
}

export default Order;