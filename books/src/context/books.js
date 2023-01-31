import { createContext, useState, useCallback } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }){

    // STATE
    const [books, setBooks] = useState([])

    // FETCH BOOKS FROM SERVER

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }, [])



    // CREATE A NEW BOOK
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        console.log(response)

        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    }

    // EDIT A BOOK BY ITS ID
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        
        const updatedBooks = books.map( (book)  => {
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    // DELETE A BOOK BY ID
    const deleteBook = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter(book => {
            return book.id !== id
        })
        console.log(response)
        setBooks(updatedBooks)
    }

    const valueToShare = {
        books,
        deleteBook,
        editBookById,
        createBook,
        fetchBooks,
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext
