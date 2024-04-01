import {useState} from "react";
import { useNavigate } from "react-router-dom";
import style from "./SelectAppCard.module.css";



function SelectApp () {

  
  const navigate = useNavigate();

    const onClickNextStage = () => {navigate("/pay/qrBar")};

    const onClickgoback = () => {navigate("/order")}
      
        
    return(
      <>
        <div className={style.background}>
          <div className={style.옐로바}>
            <p className={style.앱카드결제}>앱 카드 결제</p>
          </div>

          <div className={style.구분}>
            <div className={style.틀} onClick={onClickNextStage}>
              <img src='../images/네이버페이.png' onClick={onClickNextStage}/>
              <p className={style.np}>네이버페이</p>
            </div>

            <div className={style.틀} onClick={onClickNextStage}>
              <img src='../images/카카오페이.png'/>
              <p className={style.kp}>카카오페이</p>
            </div>

            <div className={style.틀} onClick={onClickNextStage}>
              <img src='../images/제로페이.png'/>
              <p className={style.zp}>제로페이</p>
            </div>
          </div>
          <div className={style.구분}>
            <div className={style.틀} 
              onClick={onClickNextStage} 
              >
              <img src='../images/페이코.jpg'/>
              <p className={style.pp}>페이코</p>
            </div>

            <div className={style.틀} onClick={onClickNextStage}>
              <img src='../images/삼성페이.png'/>
              <p className={style.sp}>삼성페이</p>
            </div>

            <div className={style.틀} onClick={onClickNextStage}>
              <img src='../images/애플페이.png'/>
              <p className={style.ap}>애플페이</p>
            </div>
          </div>
        </div>

        <div className={style.BottomBox}>

          
          <div className={style.뒤로가기} onClick={onClickgoback}>
            <h1>뒤로가기</h1>
          </div>
        </div>
        

      </>
    );
}
export default SelectApp;