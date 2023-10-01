import {useState} from "react";


function CreateBooks({onTitle}){


    const [title, setTitle]=useState("");

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        onTitle(title);
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