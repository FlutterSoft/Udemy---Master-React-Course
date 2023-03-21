import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'


// Component to provide a list of cards
export default function CarList(){
    const dispatch = useDispatch()
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
            cars: filteredCars,
            name: form.name
        }
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    // Creates a list of car items to render
    const renderedCars = cars.map((car) => {
        // Decide if car should be highlighted
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel is-flex is-justify-content-space-between is-align-items-center p-4 ${bold && 'has-background-info'}`}>
                <p className="">
                    {car.name} - ${car.cost}
                </p>

            <button 
                className="button is-danger" onClick={() => handleCarDelete(car)}
            >
                Delete 
            </button>
            </div>
        )
    })
    return (
        <div>
            {renderedCars}
        </div>
    )
}