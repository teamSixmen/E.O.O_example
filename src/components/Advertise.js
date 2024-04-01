import { useEffect, useState } from "react";

import { getDrinkMenus } from "../api/MenuAPI";
import { getWeather } from "../api/WeatherAPI";

import RecommendBlock from "./RecommendBlock";

import style from "./Advertise.module.css";

function Advertise ({ menu, isSet, position, recommend, setRecommend }) {

    const [drinkMenus, setDrinkMenus] = useState([]);
    const [weather, setWeather] = useState({});
    const [condition, setCondition] = useState("");

    const getWea = async () => {
        const data = await getWeather(position);
        setWeather(data.weather[0]);
        setCondition(data.weather[0].main);
    }

    useEffect(
        () => {
            getWea();
            setDrinkMenus(getDrinkMenus());
        },
        []
    );

    return (
        <>
            {(menu.menuCode > 300 || !isSet) && (menu.menuCode < 500) && (condition === "Rain") &&
                <div className={style.OuterBox}>
                    <div className={style.WeatherBox}>
                        현재 날씨: 비<br/>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/><br/>
                    </div>
                    <div className={style.RecomBox}>
                        추천 음료<br/>
                        <RecommendBlock
                            item={drinkMenus[5]}
                            recommend={recommend}
                            setRecommend={setRecommend}
                        />
                    </div>
                </div>
            }
            {(menu.menuCode > 300 || !isSet) && (menu.menuCode < 500) && (condition === "Mist") &&
                <div className={style.OuterBox}>
                    <div className={style.WeatherBox}>
                        현재 날씨: 안개<br/>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/><br/>
                    </div>
                    <div className={style.RecomBox}>
                        추천 음료<br/>
                        <RecommendBlock
                            item={drinkMenus[5]}
                            recommend={recommend}
                            setRecommend={setRecommend}
                        />
                    </div>
                </div>
            }
            {(menu.menuCode > 300 || !isSet) && (menu.menuCode < 500) && (condition === "Clouds") &&
                <div className={style.OuterBox}>
                    <div className={style.WeatherBox}>
                        현재 날씨: 흐림<br/>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/><br/>
                    </div>
                    <div className={style.RecomBox}>
                        추천 음료<br/>
                        <RecommendBlock
                            item={drinkMenus[5]}
                            recommend={recommend}
                            setRecommend={setRecommend}
                        />
                    </div>
                </div>
            }
            {(menu.menuCode > 300 || !isSet) && (menu.menuCode < 500) && (condition === "Sand") &&
                <div className={style.OuterBox}>
                    <div className={style.WeatherBox}>
                        현재 날씨: 미세먼지<br/>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/><br/>
                    </div>
                    <div className={style.RecomBox}>
                        추천 음료<br/>
                        <RecommendBlock
                            item={drinkMenus[9]}
                            recommend={recommend}
                            setRecommend={setRecommend}
                        />
                    </div>
                </div>
            }
            {(menu.menuCode > 300 || !isSet) && (menu.menuCode < 500) && (condition === "Clear") &&
                <div className={style.OuterBox}>
                    <div className={style.WeatherBox}>
                        현재 날씨: 맑음<br/>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/><br/>
                    </div>
                    <div className={style.RecomBox}>
                        추천 음료<br/>
                        <RecommendBlock
                            item={drinkMenus[8]}
                            recommend={recommend}
                            setRecommend={setRecommend}
                        />
                    </div>
                </div>
            }
            {/* <div>{condition}</div> */}
        </>
    );
}

export default Advertise;