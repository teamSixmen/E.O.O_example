import { useEffect, useState } from "react";

import style from "./AddBlock.module.css";

function RecommendBlock({ item, recommend, setRecommend }) {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(
        () => {
            isChecked? setRecommend({"menuCode": item.menuCode, "menuName": item.menuName, "price": item.price, "image": item.detail.image, "quantity": 1}):setRecommend({});
        },
        [isChecked]
    );

    // const onClickHandler = () => {
    //     setIsChecked(!isChecked);
    //     isChecked? setRecommend({"menuCode": item.menuCode, "menuName": item.menuName, "price": item.price, "image": item.detail.image, "quantity": 1}):setRecommend({});
    // }

    return (
        <>
            <div 
                className={style.AddBox}
                style={{backgroundColor: isChecked? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1)"}}
                onClick={() => {setIsChecked(!isChecked)}}    
            >
                <img src={item.detail.image} width="80px"/><br/>
                {item.menuName}<br/>
                {parseInt(item.price / 1000)},{(item.price % 1000)?item.price % 1000:"000"}원
            </div>
        </>
    );
}

export default RecommendBlock;