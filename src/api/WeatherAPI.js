export function getWeather(position) {

    const key = "";
    
    return (
        // new Promise((resolve, reject) => {
        //     navigator.geolocation.getCurrentPosition(
        //         currentPosition => {
        //             resolve(currentPosition.coords);
        //         }
        //     );
        // }).then(coords => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${key}`)
            .then(res => (res.json()))
        // })
        
    );
}
