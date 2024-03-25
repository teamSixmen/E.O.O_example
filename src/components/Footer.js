import { useNavigate } from "react-router-dom";

import style from "./Footer.module.css"

function Footer() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/help")
    };

    return (
        <>
            <div className={style.FooterBox}>
                <div 
                    onClick={onClickHandler}
                    className={style.CallBox}
                >
                    <img 
                        src="/images/vector02.png"
                        width="30px"
                        height="30px"
                        className={style.Icon}
                    />
                    <br/>직원호출
                </div>
            </div>
        </>
    );
}

export default Footer;