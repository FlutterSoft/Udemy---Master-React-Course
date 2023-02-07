import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from './Panel'


export default function Dropdown({ options, value, onChange }){
    const [isOpen, setIsOpen] = useState(false)

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