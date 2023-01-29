import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

export default function App(){
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        const id = Math.round(Math.random()*100000)
        const updatedBooks = [...books, {id, title}]
        setBooks(updatedBooks)
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map( (book)  => {
            if(book.id === id){
                return {...book, title: newTitle}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    const deleteBook = (id) => {
        const updatedBooks = books.filter(book => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    return(
        <div className="app">
            <h1> Reading List </h1>
            <BookList books={books} onDelete={deleteBook} onEdit={editBookById} />
            <BookCreate onSubmit={createBook} />
            
        </div>
    )
}