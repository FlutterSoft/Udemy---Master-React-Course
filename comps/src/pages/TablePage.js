import Table from '../components/Table'

export default function TablePage(){
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 3},
        { name: 'Apple', color: 'bg-red-500', score: 2},
        { name: 'Banana', color: 'bg-yellow-500', score: 51},
        { name: 'Lime', color: 'bg-green-400', score: 2},
        { name: 'Mango', color: 'bg-orange-300', score: 4},
    ]

    const config = [
        { label: 'Name' },
        { label: 'Color' },
        { label: 'Score' },
    ]
    return (
        <div>
            <Table 
                data={data} 
                config={config} 
            />
        </div>
    )

}