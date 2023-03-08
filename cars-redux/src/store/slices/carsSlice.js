import { createSlice, nanoid } from '@reduxjs/toolkit'

// Creates a new slice with the name 'cars', the state is 'data' and 'searchTerm' 
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        searchTerm: ''
    },
    // Actions that can take place to change the state
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            // Assumption:
            // action.payload === { name: 'namehere', cost: 150 }
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCar(state,action){
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.data.filter(car => {
                return car.id !== action.payload
            })
            state.data = updated
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
