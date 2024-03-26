import { useState, useRef, useEffect } from "react";

import Modal from "./Modal";

import style from "./MenuBlock.module.css";

function MenuBlock({ item, selectedItems, setSelectedItems, change,setChange, isDisplay, setIsDisplay }) {

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    // const onClickHandler = () => {

    //     const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

    //     if (index !== -1) {
    //         // console.log("plus");
    //         let copiedItems = selectedItems;
    //         copiedItems[index].quantity += 1;
    //         setSelectedItems(copiedItems);
    //         setChange(!change);
    //         // console.log(selectedItems);
    //     } else {
    //         if (selectedItems.length < 3) {
    //             // console.log("add");
    //             const changedItems = [...selectedItems,
    //                 {"menuCode": item.menuCode, 
    //                  "menuName": item.menuName, 
    //                  "price": item.price,
    //                  "quantity": 1}];
    //             setSelectedItems(changedItems);
    //             setChange(!change);
    //             // console.log(selectedItems);
    //         } else {
    //             alert("shopping list is full!");
    //         }
    //     }
    // };

    const onClickHandler = () => {
        setModalOpen(true);
        if(selectedItems.length > 2) {
            setIsDisplay(true);
        } else {
            setIsDisplay(false);
        }
    }

    // useEffect(()=>{
    //     if(selectedItems.length > 2) {
    //         setIsDisplay(true);
    //     } else setIsDisplay(false);
    // },[])
        
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
            <Modal
                product={item}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                modalBackground={modalBackground}
                isDisplay={isDisplay}
                setIsDisplay={setIsDisplay}
            />
        </>
    );

    // return (
    //     <>
    //         <div
    //             onClick={() => setModalOpen(true)}
    //             className={style.Block}
    //         >
    //             <br/><img src="/images/temp.jpg" width="100px"/>
    //             <br/>{item.menuName}<br/>
    //             {parseInt(item.price / 1000)},{(item.price % 1000)?item.price % 1000:"000"}원
    //         </div>
    //     </>
    // );
}


export default MenuBlock;