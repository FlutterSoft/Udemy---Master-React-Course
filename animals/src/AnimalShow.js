import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'
import { useState } from 'react'
import './AnimalShow.css'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
}

export default function AnimalShow({ type }){

    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks+1)
    }

    return (
        <li onClick={handleClick}>
            <img style={{width: "150px"}} alt="animal" src={svgMap[type]} />
            <img className="heart" style={{width: 10 + 10 * clicks + "px"}} alt="heart" src={heart} />
        </li>
    )
}