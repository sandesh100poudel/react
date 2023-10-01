import logo from './logo.svg';
import './App.css';
import CreateBooks from './components/CreateBooks';
import { useState } from 'react';
import BookList from './components/BookList';



function App() {

const [books, setBooks]=useState([]);

const createBooks = (title) => {
  const updatedBook = [...books,{id:Math.round(Math.random()*9999),title}]
  setBooks(updatedBook);

}

const deleteById = (id) => {
  const updatedBook = books.filter(book => {
     return book.id !== id
  });

  setBooks(updatedBook);
}

const editById = (id, titleName)=>{
  const updatedBook = books.map(book =>{
    if(book.id === id){
      return {...book,title:titleName}
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
