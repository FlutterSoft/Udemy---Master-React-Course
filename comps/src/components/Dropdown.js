import { useState, useEffect } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from './Panel'

export default function Dropdown({ options, value, onChange }){
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handler = (e) => {
            const dropdown = document.querySelector('.w-48')
            e.target.contains(dropdown) ? setIsOpen(false) : console.log('inside')
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const handleClick = () => {
        setIsOpen( prev => !prev)
    }


    const renderedOptions = options.map( (option) => {
        return (
            <div className="p-1 cursor-pointer hover:bg-sky-100" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    return(
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center" onClick={handleClick}>
                {value?.label || 'Select...'}
                {isOpen ? <GoChevronDown /> :<GoChevronLeft />}
            </Panel>
            {isOpen &&             
                <Panel className="absolute top-full divide-y divide-grey-100">
                    {renderedOptions}
                </Panel>
            }

        </div>
    )
}