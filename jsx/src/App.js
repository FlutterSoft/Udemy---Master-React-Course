import React from 'react'

export default function App(){
    
    const inputType = "number"
    const maxValue = 150
    const person = { name: "sam", age: "29"}
    return (
        <textarea 
            autoFocus={true} 
            spellCheck
        />
    ) 
}