import { useEffect, useState } from "react";

import { getBurgerMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

import style from "./Menus.module.css";

function BurgerMenus({ selectedItems, setSelectedItems, change, setChange }) {

    const [burgerMenuList, setBurgerMenuList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(
        () => {
            setBurgerMenuList(getBurgerMenus());
        },
        []
    )

    function getMenu() {

        const startIndex = (page - 1) * 6;
        const endIndex = startIndex + 6;
        const currentMenus = burgerMenuList.slice(startIndex, endIndex);

        if(currentMenus.length < 6) {
            const emptyChan = 6 - currentMenus.length;
            for(let i = 0; i < emptyChan; i++) {
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
                            />
                        
                    )}
                    <div className={style.pagenation}>
                        {Array.from({ length: Math.ceil(burgerMenuList.length / 6) }, (_, index) => (
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

export default BurgerMenus;