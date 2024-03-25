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
                        {sideMenus.map(
                            side => 
                                <AddBlock
                                    key={side.menuCode}
                                    item={side}
                                    add={addSide}
                                    setAdd={setAddSide}
                                />
                        )}
                    </div>
                    <div className={style.NameBox}>음료</div>
                    <div className={style.ItemBox}>
                    {drinkMenus.map(
                        drink => 
                            <AddBlock
                                key={drink.menuCode}
                                item={drink}
                                add={addDrink}
                                setAdd={setAddDrink}
                            />
                    )}
                    </div>
                </div>
            }
        </>
    );
}

export default Set