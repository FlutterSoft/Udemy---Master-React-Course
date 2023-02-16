import Table from './Table'
import { BiSortAlt2,BiSortDown, BiSortUp } from 'react-icons/bi'
import useSort from '../hooks/use-sort'

export default function SortableTable(props){
    const { config, data } = props
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config)

    const updatedConfig = config.map( (column) => {
        if(!column.sortValue){
            return column
        }
        return {
            ...column,
            header: () => 
                <th 
                    onClick={() => setSortColumn(column.label)}           
                    className="cursor-pointer gap-1 hover:bg-gray-100"
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label} 
                    </div>

                </th>
        }
    })

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
