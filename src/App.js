import logo from './logo.svg';
import './App.css';
import CreateBooks from './components/CreateBooks';
import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import axios from 'axios';



function App() {

const [books, setBooks]=useState([]);

const fetchBooks = async () =>{
  const response = await axios.get('http://localhost:3001/books');

  setBooks(response.data);
}

useEffect(()=>{
fetchBooks()
},[])

const createBooks = async (title) => {

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

  return (
    <div className="App">

<CreateBooks onTitle={createBooks}/>
<BookList books={books} onDelete={deleteById} onEdit={editById}/>


    </div>
  );
}

export default App;
