import { useEffect, useState } from "react";

import { getChickenMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function ChickenMenus({selectedItems, setSelectedItems, change, setChange}) {

    const [chickenMenuList, setChickenMenuList] = useState([]);

    useEffect(
        () => {
            setChickenMenuList(getChickenMenus());
        },
        []
    )

    return (
        <>
            <div className={style.Box}>
                {chickenMenuList.map(
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

export default ChickenMenus;