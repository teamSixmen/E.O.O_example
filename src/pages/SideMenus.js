import { useEffect, useState } from "react";

import { getSideMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function SideMenus({selectedItems, setSelectedItems, change, setChange, isDisplay, setIsDisplay}) {

    const [sideMenuList, setSideMenuList] = useState([]);
    const [page, setPage] = useState(1);
    const onePageSixMenus = 6;

    useEffect(
        () => {
            setSideMenuList(getSideMenus());
        },
        []
    )

    function getMenu() {

        const startIndex = (page - 1) * onePageSixMenus;
        const endIndex = startIndex + onePageSixMenus;
        const currentMenus = sideMenuList.slice(startIndex, endIndex);

        if(currentMenus.length < onePageSixMenus) {
            const emptyChan = onePageSixMenus - currentMenus.length;
            for(let i = 0; i <emptyChan; i++) {
                currentMenus.push({empty:true})
            }
        }
        return currentMenus;
    }

    function pageChange(pageNumber) {
        setPage(pageNumber);
    }

    return (
        <>
            <div className={style.allBox}>
                <div className={style.Box}>
                    {getMenu().map(
                        product => !product.empty &&
                            <MenuBlock
                                key={product.menuCode}
                                item={product}
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
                                change={change}
                                setChange={setChange}
                                isDisplay={isDisplay}
                                setIsDisplay={setIsDisplay}
                            />
                        
                )}
                <div className={style.pagenation}>
                    {Array.from({ length: Math.ceil(sideMenuList.length / onePageSixMenus) }, (_, index) => (
                                    <button
                                        key={index}
                                        className={page === index + 1 ? style.buttonActive : style.pagebutton}
                                        onClick={() => pageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                    ))}
                </div>

                </div>
            </div>
        </>
    );
}

export default SideMenus;