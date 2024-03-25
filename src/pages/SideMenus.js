import { useEffect, useState } from "react";

import { getSideMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function SideMenus({selectedItems, setSelectedItems, change, setChange}) {

    const [sideMenuList, setSideMenuList] = useState([]);

    useEffect(
        () => {
            setSideMenuList(getSideMenus());
        },
        []
    )

    return (
        <>
            <div className={style.Box}>
                {sideMenuList.map(
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

export default SideMenus;