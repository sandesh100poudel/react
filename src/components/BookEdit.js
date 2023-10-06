import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/books";


function BookEdit ({book,onSubmit}){
    const {editById}=useContext(BooksContext);

    const [edit, setEdit] = useState(book.title);

    const handleChange = (event)=>{
        setEdit(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        onSubmit();
        editById(book.id,edit)
        
    }

    
    return<div>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={edit} />
            <button>Save</button>
        </form>
    </div>
}

export default BookEdit;