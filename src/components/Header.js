import { useNavigate } from "react-router-dom";

import style from "./Header.module.css";

function Header({here, setHere}) {

    const navigate = useNavigate();

    const onClickHome = () => navigate("/");
    const onClickHere = () => setHere(true);
    const onClickGo = () => setHere(false);

    return (
        <>
            <div>
                <div className={style.TopBox}></div>
                <div className={style.HeaderBox}>
                    <img 
                        className={style.logo}
                        src="/images/twoLineCI.png"
                    />
                    <div className={style.Blank}></div>
                    <div 
                        onClick={onClickHere}
                        className={style.HereBox}
                        style={{backgroundColor: here? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                    >
                        매장
                    </div>
                    <div 
                        onClick={onClickGo}
                        className={style.HereBox}
                        style={{backgroundColor: !here? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                    >
                        포장
                    </div>
                    <div 
                        onClick={onClickHome}
                        className={style.HomeBox}
                    >
                        <img 
                            src="/images/vector01.png"
                            className={style.Home}
                        />
                        <br/>처음으로
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;