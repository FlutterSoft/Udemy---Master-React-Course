import { useState, useContext } from 'react'
import BooksContext from '../context/books'
import BookEdit from './BookEdit'

export default function BookShow({ book }){

    const { deleteBook } = useContext(BooksContext)

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = (e) => {
        deleteBook(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}  />
    }

    return(
        <div className="book-show">
            <img alt="book cover" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>

            </div>

        </div>
    )
}