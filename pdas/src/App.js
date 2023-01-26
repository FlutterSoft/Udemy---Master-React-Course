import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from '../src/images/alexa.png'
import SiriImage from '../src/images/siri.png'
import CortanaImage from '../src/images/cortana.png'


export default function App(){
    return(
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard 
                title = "Alexa" 
                handle = "@alexa99" 
                image = {AlexaImage} />
            <ProfileCard 
                title = "Cortana" 
                handle = "cortana32"  
                image = {CortanaImage} />
            <ProfileCard 
                title = "Siri" 
                handle = "siri01"  
                image = {SiriImage} />
        </div>
    )
}