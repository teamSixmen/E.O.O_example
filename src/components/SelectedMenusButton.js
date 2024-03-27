import style from "./SelectedMenus.module.css";

function SelectedMenusButton({ selectedItems, isDisplay }) {

    return(
        <>
            {selectedItems.length > 3 &&
                <div>
                    <div className={!isDisplay?style.SelectedButton:style.SelectedButton2}></div>
                    <div className={!isDisplay?style.SelectedButton2:style.SelectedButton}></div>
                </div>
            }
        </>
    );
}

export default SelectedMenusButton;