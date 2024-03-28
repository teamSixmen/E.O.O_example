import { useState, useRef } from "react";

import Modal from "./Modal";

import style from "./MenuBlock.module.css";

function MenuBlock({ item, selectedItems, setSelectedItems, change, setChange }) {

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    return (
        <>  
            <div
                onClick={() => setModalOpen(true)}
                className={style.Block}
            >
                <br/><img src={item.detail.image} height="100px"/>
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
            />
        </>
    );
}


export default MenuBlock;