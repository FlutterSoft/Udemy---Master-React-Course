import { useSelector } from 'react-redux'

// Component to provide a list of cards
export default function CarList(){
    const cars = useSelector((state) => {
        return state.cars.data
    })

    // Creates a list of car items to render
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