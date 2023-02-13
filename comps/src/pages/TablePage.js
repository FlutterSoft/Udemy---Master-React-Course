import Table from '../components/Table'

export default function TablePage(){
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 3},
        { name: 'Apple', color: 'bg-red-500', score: 2},
        { name: 'Banana', color: 'bg-yellow-500', score: 5},
        { name: 'Lime', color: 'bg-green-400', score: 2},
        { name: 'Mango', color: 'bg-orange-300', score: 4},
    ]

    const config = [
        { 
            label: 'Name',
            render: (fruit) => fruit.name,
            sort: (a,b) => a.localeCompare(b),
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}> </div>

        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sort: (a,b) => a-b,
        },
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }
    return (
        <div>
            <Table 
                data={data} 
                config={config} 
                tableHeading="Fruit Table"
                keyFn={keyFn}
            />
        </div>
    )

}