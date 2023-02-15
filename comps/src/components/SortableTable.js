import Table from './Table'
import { BiSortAlt2,BiSortDown, BiSortUp } from 'react-icons/bi'
import { useState } from 'react'

export default function SortableTable(props){
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const { config, data } = props

    const handleClick = (label) => {
        if(sortBy && label !== sortBy){
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if(sortOrder === null){
            setSortOrder('asc')
            setSortBy(label)
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc')
            setSortBy(label)
        }
        else{
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map( (column) => {
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header: () => 
                <th 
                    onClick={() => handleClick(column.label)}           
                    className="cursor-pointer gap-1 hover:bg-gray-100"
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label} 
                    </div>

                </th>
        }
    })

    let sortedData = data
    if (sortOrder && sortBy){
        const { sortValue } = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)
            const reverseOrder = sortOrder === 'asc' ? 1 : -1
            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder
            }
            else{
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    return(
        <Table {...props} data={sortedData} config={updatedConfig} />
    )
}


const getIcons = (label, sortBy, sortOrder) => {
    if(label  !== sortBy || sortOrder === null){
        return <BiSortAlt2/>
    }
    else if(label === sortBy && sortOrder === 'asc'){
        return <BiSortUp />
    }
    else if(label === sortBy && sortOrder === 'desc'){
        return <BiSortDown />
    }
}
