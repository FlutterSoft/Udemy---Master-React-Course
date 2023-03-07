import { useSelector } from 'react-redux'

export default function CarList(){
    const cars = useSelector((state) => {
        return state.cars.data
    })

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>

            </div>
        )
    })
    return (
        <div>
            {renderedCars}
        </div>
    )
}