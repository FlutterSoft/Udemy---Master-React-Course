import Table from '../components/Table'
import SortableTable from '../components/SortableTable'
import jsonData from '../MOCK_DATA.json'

export default function TablePage(){
    const oldData = [
        { name: 'Orange', color: 'bg-orange-500', score: 3},
        { name: 'Apple', color: 'bg-red-500', score: 2},
        { name: 'Banana', color: 'bg-yellow-500', score: 5},
        { name: 'Lime', color: 'bg-green-400', score: 2},
        { name: 'Mango', color: 'bg-orange-300', score: 4},
    ]

    const oldConfig = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}> </div>

        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
    ]

    const data = jsonData

    const config = [
        { 
            label: 'ID',
            render: (row) => row.id,
            sortValue: (row) => row.id
        },
        { 
            label: 'First Name',
            render: (row) => row.first_name,
            sortValue: (row) => row.first_name

        },
        { 
            label: 'Last Name',
            render: (row) => row.last_name,
            sortValue: (row) => row.last_name
        },
        { 
            label: 'Email',
            render: (row) => row.email,
            sortValue: (row) => row.email
        },
        { 
            label: 'Gender',
            render: (row) => row.gender,
            sortValue: (row) => row.gender
        },
        { 
            label: 'IP',
            render: (row) => row.ip_address,
            // sortValue: (row) => row.ip_address
        },
    ]

    const keyFn = (row) => {
        return row.id
    }
    
    return (
        <div>
            <Table 
                data={oldData} 
                config={oldConfig} 
                keyFn={keyFn} 
                tableHeading="Old unsortable table"
            />
            <SortableTable 
                data={data} 
                config={config} 
                tableHeading="People Table"
                keyFn={keyFn}
            />
        </div>
    )

}