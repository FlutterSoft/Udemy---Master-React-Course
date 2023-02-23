import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }){

    // STATE
    const [expandedIndex, setExpandedIndex] = useState(-1)
    const handleClick = (nextIndex) => {
        expandedIndex === nextIndex ? setExpandedIndex(-1) : setExpandedIndex(nextIndex)
    }

    // Render each item from items list
    const renderedItems = items.map( (item, index) => {
        const isExpanded = index === expandedIndex
        const icon = <span className="text-2xl">
            {/* If accordion is expanded show down arrow else show left */}
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
            return (
                <div key={item.id}>
                    <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)}>        
                        {item.label}
                        {icon}
                    </div>
                    {isExpanded && <div className="border-b p-5">{item.content}</div>}
                </div>
            )
        })

    return (
        <div className="border-x border-t rounded">
            {renderedItems}
        </div>
    )
}