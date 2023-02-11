import { createContext, useEffect, useState } from 'react'
import Button from '../components/Button'
const NavigationContext = createContext()

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)
        return () => {
            window.removeEventListener('popstate', handler)
        }

    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return(
        <NavigationContext.Provider value={{}}>
            <div>
                <Button onClick={()=> {navigate('/accordion')}}>Go to accordion</Button>
                <Button onClick={()=> {navigate('/dropdown')}}>Go to dropdown</Button>
                <Button onClick={()=> {navigate('/')}}>Go to home</Button>
            </div>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    ) 

}

export { NavigationProvider }
export default NavigationContext