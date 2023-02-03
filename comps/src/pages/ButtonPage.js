import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

export default function ButtonPage(){
    return (
        <div className="bg-gray-100 h-screen">
            <div>
                <Button onClick={()=>alert('clicked')} success>Click <GoBell /></Button>
            </div>
            <div>
                <Button primary>Download <GoCloudDownload /></Button>
            </div>
            <div>
                <Button warning outline>Click Me Pleaseee</Button>
            </div>
            <div>
                <Button secondary> Save <GoDatabase /></Button>
            </div>
            <div>
                <Button onMouseEnter={()=>alert('moused over')} danger rounded>Please Just Click Meeeeee</Button>
            </div>
        </div>
    )
}