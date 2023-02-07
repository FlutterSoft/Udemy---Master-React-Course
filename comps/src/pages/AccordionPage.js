import Accordion from '../components/Accordion'

export default function AccordionPage(){
    const items = [
        {
            id: 'oasdfi',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project. You can use React on any project. You can use React on any project. '
        },
        {
            id: 'asdf2f',
            label: 'Can I use JavaScript on a project?',
            content: 'Of course JavaScript can be absolutely anywhere. Of course JavaScript can be absolutely anywhere. Of course JavaScript can be absolutely anywhere. Of course JavaScript can be absolutely anywhere. '
        },
        {
            id: 'asdfxcv',
            label: 'Can I use Python on a project?',
            content: 'You can use Python on any project. You can use Python on any project. You can use Python on any project. '
        },
    ]
    return (
        <Accordion items={items} />
    )
}