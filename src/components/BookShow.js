import { useState } from "react";
import BookEdit from "./BookEdit";
import { useContext } from "react";
import BooksContext from "../context/books";



function BookShow({book}){

    const{deleteById} = useContext(BooksContext);

    const [showEdit, setShowEdit] = useState(false);
    const handleEdit =()=>{
        setShowEdit(!showEdit);
    }

    const handleDelete = () =>{
        deleteById(book.id);
    }

    const handleSubmit = () =>{
        
        setShowEdit(false);
        
    }

    let content = <h1>{book.title}</h1>
    if(showEdit){
        return <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return <div><h1>{content}</h1><button onClick={handleDelete}>Delete</button>
    <buttton onClick={handleEdit}>Edit</buttton></div>
}

export default BookShow;