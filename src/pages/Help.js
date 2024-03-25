import { useNavigate } from "react-router-dom";
import style from './Style.module.css';

function Help({setSelectedItems}) {

    const navigate = useNavigate();

    const onClickhandler = () => {
        setSelectedItems([]);
        navigate("/")
    };

    return (
        <>
            <div className={style.직원호출}>
                <img src ='/images/직원아이콘.png'/>
                <h1>직원이 호출되었습니다.</h1>
                <h1>잠시만 기다려주세요.</h1>
            </div>
        </>
    );
}

export default Help;