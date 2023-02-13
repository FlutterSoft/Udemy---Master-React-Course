export default function Table({ data, config, tableHeading, keyFn }) {
    
    const renderedHeaders = config.map( (column) => {
        return (
            <th key={column.label}>{column.label}</th>
        )
    })
    
    const renderedRows = data.map( rowData => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-4" key={column.label}>
                    {column.render(rowData)}
                </td>
            ) 
        })

        return (
            
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>{tableHeading}</thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
            <tbody>
                {renderedRows}
            </tbody>

        </table>
    )

}