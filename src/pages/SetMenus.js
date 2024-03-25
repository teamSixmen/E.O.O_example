import { useEffect, useState } from "react";

import { getSetMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function SetMenus({selectedItems, setSelectedItems, change, setChange}) {

    const [setMenuList, setSetMenuList] = useState([]);

    useEffect(
        () => {
            setSetMenuList(getSetMenus());
        },
        []
    )

    return (
        <>
            <div className={style.Box}>
                {setMenuList.map(
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

export default SetMenus;