

export function CarDetails({ car, onGoBack }) {

    return <section className="car-details">
        <h1>Car vendor : {car.vendor}</h1>
        <h5>Max speed: {car.maxSpeed}</h5>
        <img src={`assets/img/${car.vendor}.png`} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!</p>
        <button onClick={onGoBack}>Go Back</button>
    </section>
}