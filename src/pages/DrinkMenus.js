import { useEffect, useState } from "react";

import { getDrinkMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function DrinkMenus({selectedItems, setSelectedItems, change, setChange}) {

    const [drinkMenuList, setDrinkMenuList] = useState([]);

    useEffect(
        () => {
            setDrinkMenuList(getDrinkMenus());
        },
        []
    )

    return (
        <>            
            <div className={style.Box}>
                {drinkMenuList.map(
                    product => 
                        <MenuBlock
                            key={product.menuCode}
                            item={product}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            change={change}
                            setChange={setChange}
                        />
                    
            )}
            </div>
        </>
    );
}

export default DrinkMenus;