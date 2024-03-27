import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import OrderedMenus from "../components/OrderedMenus";
import Timer from "../components/Timer";

import style from "./Style.module.css";

function Receipt({here, selectedItems, waitingNum, setWaitingNum}) {
    
    const navigate = useNavigate();

    const copiedItems = selectedItems;
    const sortedItems = copiedItems.sort(function (a, b) {
        let x = a.menuName;
        let y = b.menuName;
        
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    let totalPrice = 0;
    
    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )

    useEffect (
        () => {

            return () => {
                setWaitingNum(waitingNum + 1);
            }
        },
        []
    );

    return (
        <>
            <div className={style.Back}>
                <div className={style.Blank}></div>
                <h1>주문이 완료되었습니다!</h1>
                <div 
                    className={style.Receipt}
                    onClick={() => navigate("/")}
                >
                    <p className={style.RecepitTextBlank}> </p><br/>
                    <p className={style.ReceiptTextName}>품목명</p>
                    <p className={style.ReceiptTextPrice}>단가</p>
                    <p className={style.ReceiptTextQuantity}>수량</p>
                    <p className={style.ReceiptTextSum}>금액</p>
                    <div>
                        {sortedItems.map(
                            sortedItem =>
                            <OrderedMenus
                                key={sortedItem.menuCode}
                                item={sortedItem}
                            />
                        )}
                    </div>
                    <br/>
                    <h2>합계 금액 : {parseInt(totalPrice / 1000)},{(totalPrice % 1000)? totalPrice % 1000:"000"}</h2>
                    <h3>{here? "매장":"포장"}</h3>
                    <h2>대기순번 : {waitingNum} </h2>
                    <Timer/>
                    <div 
                        className={style.Home}
                    ><h3>화면을 터치하세요!</h3></div>
                </div>
            </div>
        </>
    );
}

export default Receipt;