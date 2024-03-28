import Weather from "./Weather";
import { useNavigate } from "react-router-dom";

import style from "./Order.module.css";

function Order({ selectedItems }) {
    
    const navigate = useNavigate();
    
    const onClickHander = () => {
    
        (selectedItems.length)? navigate("/order"):alert("선택된 메뉴가 없습니다.");
    }

    return (
        <>
            <div className={style.Box}>
                <div className={style.Blank}>
                    <Weather/>
                </div>
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