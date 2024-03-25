import style from "./MenuBlock.module.css";

function MenuBlock({ item, selectedItems, setSelectedItems, change,setChange }) {

    const onClickHandler = () => {

        const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

        if (index !== -1) {
            // console.log("plus");
            let copiedItems = selectedItems;
            copiedItems[index].quantity += 1;
            setSelectedItems(copiedItems);
            setChange(!change);
            // console.log(selectedItems);
        } else {
            if (selectedItems.length < 3) {
                // console.log("add");
                const changedItems = [...selectedItems, 
                    {"menuCode": item.menuCode, 
                     "menuName": item.menuName, 
                     "price": item.price,
                     "quantity": 1}];
                setSelectedItems(changedItems);
                setChange(!change);
                // console.log(selectedItems);
            } else {
                alert("shopping list is full!");
            }
        }
    };

    return (
        <>
            <div
                onClick={onClickHandler}
                className={style.Block}
            >
                <br/><img src="/images/temp.jpg" width="100px"/>
                <br/>{item.menuName}<br/>
                {parseInt(item.price / 1000)},{(item.price % 1000)?item.price % 1000:"000"}원
            </div>
        </>
    );
}

export default MenuBlock;