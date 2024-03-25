import { useEffect, useState } from "react";

function Timer() {
    
    // const [time, setTime] = useState(30);

    let time = 30;

    const timer = 
    useEffect(
        () => {
            setInterval(
                () => {
                    time = time - 1;
                    console.log(time);
                }, 1000
            );

            return(
                () => {
                    if (time < 0) {
                        clearInterval(timer);
                    }
                }
            );
        },
        []
    );

    if (time < 0) {
        clearInterval(timer);
    }

    return (
        <>
            <h3>time?</h3>
        </>
    );
}

export default Timer;