export function getWeather(position) {

    const key = "9695eeef0551ed8a75c314a5fd4a2c7e";
    
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