import { useEffect, useState } from "react";

import { getBurgerMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function BurgerMenus({selectedItems, setSelectedItems, change, setChange}) {

    const [burgerMenuList, setBurgerMenuList] = useState([]);

    useEffect(
        () => {
            setBurgerMenuList(getBurgerMenus());
        },
        []
    )

    return (
        <>
            <div className={style.Box}>
                {burgerMenuList.map(
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

export default BurgerMenus;