import { useState } from "react";
import BookEdit from "./BookEdit";


function BookShow({book,onDelete,onEdit}){

    const [showEdit, setShowEdit] = useState(false);
    const handleEdit =()=>{
        setShowEdit(!showEdit);
    }

    const handleDelete = () =>{
        onDelete(book.id);
    }

    const handleSubmit = (id, title) =>{
        
        setShowEdit(false);
        onEdit(id,title);
    }

    let content = <h1>{book.title}</h1>
    if(showEdit){
        return <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit}/>
    }

    return <div><h1>{content}</h1><button onClick={handleDelete}>Delete</button>
    <buttton onClick={handleEdit}>Edit</buttton></div>
}

export default BookShow;