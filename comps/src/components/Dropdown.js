import { useState } from 'react'

export default function Dropdown({ options }){
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')

    const handleOptionClick = (option) => {
        setIsOpen(false)
        setSelected(option)
    }

    const handleClick = () => {
        setIsOpen( prev => !prev)
    }

    const renderedOptions = options.map( (option) => {
        return (
            <div className="p-5 bg-gray-100 border border-gray-300 cursor-pointer" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )

    })


    return(
        <div>
            <div className="p-5 bg-gray-200 border border-gray-400 cursor-pointer" onClick={handleClick}>{selected.label || "Select"}</div>
            {isOpen &&             
                <div>
                    {renderedOptions}
                </div>
            }

        </div>
    )
}