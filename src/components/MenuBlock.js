import { useEffect, useState, useRef } from "react";

import { getPosition } from "../api/PositionAPI";
import { getWeather } from "../api/WeatherAPI";

import Modal from "./Modal";

import style from "./MenuBlock.module.css";

function MenuBlock({ item, selectedItems, setSelectedItems, change, setChange }) {

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const [position, setPosition] = useState({});

    const getPos = async () => {
        const pos = await getPosition();
        setPosition(pos);
    };

    useEffect(
        () => {
            getPos();
        },
        []
    )

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
                position={position}
                setPosition={setPosition}
            />
        </>
    );
}


export default MenuBlock;