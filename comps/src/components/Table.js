export default function Table({ data }) {
    const renderedData = data.map( fruit => {
        return (
            <tr className="border-b" key={fruit.name}>
                <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}>

                    </div>
                </td>
                <td className="p-3">{fruit.score}</td>
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>Fruit Table</thead>
            <tr className="border-b-2">
                <th>Fruits</th>
                <th>Colour</th>
                <th>Score</th>
            </tr>
            <tbody>
                {renderedData}
            </tbody>

        </table>
    )

}