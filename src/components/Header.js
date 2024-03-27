import { useNavigate, useLocation } from "react-router-dom";

import style from "./Header.module.css";

function Header({here, setHere}) {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <>
            <div>
                <div className={style.TopBox}></div>
                <div className={style.HeaderBox}>
                    <img 
                        className={style.logo}
                        src="/images/twoLineCI.png"
                    />

                    <div 
                        className={style.HereBox}
                        style={{backgroundColor: here? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                        onClick={() => {pathname.match("pay") || pathname === "/receipt"? alert("지금은 변경할 수 없습니다."):setHere(true)}}
                    >
                        매장
                    </div> 

                    <div 
                        className={style.HereBox}
                        style={{backgroundColor: !here? "rgba(255, 184, 0, 1)":"rgba(255, 255, 255, 1"}}
                        onClick={() => {pathname.match("pay") || pathname === "/receipt"? alert("지금은 변경할 수 없습니다."):setHere(false)}}
                    >
                        포장
                    </div>

                    <div 
                        onClick={() => navigate("/")}
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