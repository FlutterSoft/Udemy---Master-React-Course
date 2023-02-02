import Button from './Button'
export default function App(){
    return (
        <div className="bg-gray-100 h-screen">
            <div>
                <Button success>Click</Button>
            </div>
            <div>
                <Button primary>Click Me</Button>
            </div>
            <div>
                <Button warning outline>Click Me Pleaseee</Button>
            </div>
            <div>
                <Button secondary>Please Just Click Meeeeee</Button>
            </div>
        </div>

            

    )
}