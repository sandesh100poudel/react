import { useState } from "react";


function BookEdit ({book,onSubmit}){

    const [edit, setEdit] = useState(book.title);

    const handleChange = (event)=>{
        setEdit(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        onSubmit(book.id, edit);
        
    }

    
    return<div>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={edit} />
            <button>Save</button>
        </form>
    </div>
}

export default BookEdit;