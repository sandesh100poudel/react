import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
import React from "react";

function BookList(){

    const {books} = useContext(BooksContext);

    const renderList = books?.map((book)=>{
        return( <BookShow key={book.id} book={book} />)
    })
    return(
        <div>{renderList}</div>
    )
}
export default BookList;