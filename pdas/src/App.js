import 'bulma/css/bulma.css'
import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from '../src/images/alexa.png'
import SiriImage from '../src/images/siri.png'
import CortanaImage from '../src/images/cortana.png'


export default function App(){
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-3">
                        <ProfileCard 
                            title = "Alexa" 
                            handle = "@alexa99" 
                            image = {AlexaImage} 
                            description = "Alexa is a personal digital assistant developed by Amazon"
                        />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title = "Cortana" 
                                handle = "cortana32"  
                                image = {CortanaImage} 
                                description = "Cortana is a personal digital assistant developed by Microsoft"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title = "Siri" 
                                handle = "siri01"  
                                image = {SiriImage} 
                                description = "Siri is a personal digital assistant developed by Apple"
                            />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}