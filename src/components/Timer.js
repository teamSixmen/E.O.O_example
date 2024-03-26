import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Timer() {
    
    const navigate = useNavigate();

    const [sec, setSec] = useState(60);

    useEffect(
        () => {
            // console.log("hi");
            const timer =
                setInterval(
                    () => {
                        // console.log(sec);
                        setSec((prev) => prev - 1);

                        if (sec < 1) {
                            // console.log("end?");
                            navigate("/");
                        }
                    }, 1000
                );

                return () => {
                    clearInterval(timer);
                }
        },
        [sec]
    );

    return (
        <>
            <h3>{sec}초 후 처음으로 이동합니다.</h3>
        </>
    );
}

export default Timer;