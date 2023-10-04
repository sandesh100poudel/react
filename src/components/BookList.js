import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({books,onDelete,onEdit}){

    const {count,incrementCount} = useContext(BooksContext)

    const renderList = books.map((book)=>{
        return( <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>)
    })
    return(
        <div>{count}<button onClick={incrementCount}></button>{renderList}</div>
    )
}
export default BookList;