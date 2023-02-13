import Link from './Link'

export default function Sidebar(){
    const links = [
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Button', path: '/button' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table'}

    ]

    const renderedLinks = links.map( link => {
        return (
            <Link 
                key={link.label} 
                to={link.path} 
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            > 
                {link.label} 
            </Link>
        )
    })

    return (
        <div className="sticky top-0 flex flex-col items-start overflow-y-auto">
            {renderedLinks}
        </div>
    )
}