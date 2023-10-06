import { createContext ,useState} from "react";
import axios from 'axios';


const BooksContext= createContext();

function Provider({children})
{
    
    

    
const [books, setBooks]=useState([]);

const fetchBooks = async () =>{
  const response = await axios.get('http://localhost:3001/books');

  setBooks(response.data);
}

const createBook = async (title) => {

    const response =await axios.post('http://localhost:3001/books',{
     title
   });
 
   
   const updatedBook = [...books,response.data]
   setBooks(updatedBook);
 
 }
 
 const deleteById = async (id) => {
 
   await axios.delete("http://localhost:3001/books/" +id )
   const updatedBook = books.filter(book => {
      return book.id !== id
   });
 
   setBooks(updatedBook);
 }
 
 const editById = async (id, titleName)=>{
 
   const response = await axios.put(`http://localhost:3001/books/${id}` ,{
     title:titleName
   })
   const updatedBook = books.map(book =>{
     if(book.id === id){
       return {...book,...response.data}
     };
     return book;
 
   });
   console.log(books);
 
   setBooks(updatedBook);
 }
  const valueToHelp = {
    books:books,
    deleteById,
    editById,
    createBook,
    fetchBooks

  }
 

    return <BooksContext.Provider value={valueToHelp}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;