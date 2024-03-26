import { useEffect, useState } from "react";

import { getSideMenus } from "../api/MenuAPI";
import { getDrinkMenus } from "../api/MenuAPI";

import AddBlock from "./AddBlock";

import style from "./Set.module.css";

function Set({ item, isSet, setIsSet, addSide, setAddSide, addDrink, setAddDrink }) {
    
    // const [isSet, setIsSet] = useState(true);
    // const [addSide, setAddSide] = useState(401);
    // const [addDrink, setAddDrink] = useState(501);
    const [sideMenus, setSideMenus] = useState([]);
    const [drinkMenus, setDrinkMenus] = useState([]);
    const [sideNum, setSideNum] = useState(0);
    const [drinkNum, setDrinkNum] = useState(0);

    useEffect(
        () => {
            setSideMenus(getSideMenus());
            setDrinkMenus(getDrinkMenus());
        },
        []
    )

    // useEffect(
    //     () => {
    //         console.log(addSide);
    //     },
    //     [addSide]
    // );
    
    // useEffect(
    //     () => {
    //         console.log(addDrink);
    //     },
    //     [addDrink]
    // );

    return (
        <>
            {item.menuCode < 300 &&
                <div className={style.Set}>
                    <div 
                        className={style.SetBox}
                        style={{backgroundColor: !isSet? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1)"}}
                        onClick={() => setIsSet(false)}
                    >
                        <img src="/images/temp.jpg" width="50px"/><br/>단품</div>
                    <div 
                        className={style.SetBox}
                        style={{backgroundColor: isSet? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1)"}}
                        onClick={() => setIsSet(true)}
                    >
                        <img src="/images/temp.jpg" width="50px"/><br/>세트</div>
                </div>
            }
            {item.menuCode < 300 && isSet &&
                <div className={style.AddBox}>
                    <div className={style.NameBox}>사이드</div>
                    <div className={style.ItemBox}>
                        <div 
                            className={style.SideButton}
                            onClick={() => {if (sideNum === 1) setSideNum(sideNum - 1)}}
                        >
                            <img src="/images/왼쪽.png" className={style.Polygon}/>
                        </div>
                        {sideMenus.slice(5 * sideNum, 5 * (sideNum + 1)).map(
                            side => 
                                <AddBlock
                                    key={side.menuCode}
                                    item={side}
                                    add={addSide}
                                    setAdd={setAddSide}
                                />
                        )}
                        <div 
                            className={style.SideButton}
                            onClick={() => {if (sideNum === 0) setSideNum(sideNum + 1)}}
                        >
                            <img src="/images/오른쪽.png" className={style.Polygon}/>
                        </div>
                    </div>
                    <div className={style.NameBox}>음료</div>
                    <div className={style.ItemBox}>
                        <div 
                            className={style.SideButton}
                            onClick={() => {if (drinkNum === 1) setDrinkNum(drinkNum - 1)}}
                        >
                            <img src="/images/왼쪽.png" className={style.Polygon}/> 
                        </div>
                        {drinkMenus.slice(5 * drinkNum, 5 * (drinkNum + 1)).map(
                            drink => 
                                <AddBlock
                                    key={drink.menuCode}
                                    item={drink}
                                    add={addDrink}
                                    setAdd={setAddDrink}
                                />
                        )}
                        <div 
                            className={style.SideButton}
                            onClick={() => {if (drinkNum === 0) setDrinkNum(drinkNum + 1)}}
                        >
                            <img src="/images/오른쪽.png" className={style.Polygon}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Set