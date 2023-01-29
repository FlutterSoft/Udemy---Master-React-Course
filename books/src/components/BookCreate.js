import { useState } from 'react'
export default function BookCreate({ onSubmit }){
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(title)
        setTitle('')
    }

    return(
        <div className="book-create">
            <h3>Add A Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create Book!</button>
            </form>
        </div>

    )
}