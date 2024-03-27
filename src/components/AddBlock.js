import style from "./AddBlock.module.css";

function AddBlock({ item, add, setAdd }) {

    return (
        <>
            <div 
                className={style.AddBox}
                style={{backgroundColor: (item.menuCode === add)? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1)"}}
                onClick={() => {setAdd(item.menuCode)}}    
            >
                <img src="/images/temp.jpg" width="80px"/><br/>
                {item.menuName}<br/>
                {parseInt(item.price / 1000)},{(item.price % 1000)?item.price % 1000:"000"}원
            </div>
        </>
    );
}

export default AddBlock;