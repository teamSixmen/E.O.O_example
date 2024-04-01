import style from "./OrderedMenus.module.css";

function OrderedMenus({item}) {

    return (
        <>
            <div className={style.ReceiptBox}>
                <pre className={style.ReceiptTextName}>{item.menuName}</pre>
                <p className={style.ReceiptTextPrice}>{parseInt(item.price / 1000)},{(item.price % 1000)? item.price % 1000:"000"}</p>
                <p className={style.ReceiptTextQuantity}>{item.quantity}</p>
                <p className={style.ReceiptTextSum}>{parseInt(item.price * item.quantity / 1000)},{(item.price * item.quantity % 1000)? item.price * item.quantity % 1000:"000"}</p>
                <p className={style.ReceiptTextBlank}> </p>
            </div>
            <hr className={style.hrstyle}/>
        </>
    );
}

export default OrderedMenus;