import {useContext, useState} from "react";
// import { createContext } from "react";
import BooksContext from "../context/books";


function CreateBooks(){
    const {createBook} = useContext(BooksContext)


    const [title, setTitle]=useState("");

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    }


    return(
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default CreateBooks;