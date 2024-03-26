import { useState } from "react";
import style from "./SelectedMenus.module.css";

function SelectedMenusButton({selectedItems, isDisplay}){

    if(selectedItems.length> 3){
        return(
            <>
                <div className={!isDisplay?style.SelectedButton:style.SelectedButton2}></div>
                <div className={!isDisplay?style.SelectedButton2:style.SelectedButton}></div>
            </>
        );
    }
    
    // if(selectedItems.length> 6){
    //     return(
    //         <>
    //             <div className={style.SelectedButton}></div>
    //             <div className={style.SelectedButton}></div>
    //             <div className={style.SelectedButton}></div>
    //         </>
    //     );
    // }

    if(selectedItems.length < 1) {
        return(
            <>
            </>
        )
    }

    return(
        <>
           <div className={style.SelectedButton}></div>
        </>
    );
}

export default SelectedMenusButton;