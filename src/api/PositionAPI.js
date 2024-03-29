export function getPosition() {

    return (
        new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                currentPosition => {
                    // console.log(currentPosition)
                    resolve(currentPosition.coords);
                }
            );
        }) 
    );
}