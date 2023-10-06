import logo from './logo.svg';
import './App.css';
import CreateBooks from './components/CreateBooks';
import { useEffect,useContext } from 'react';
import BookList from './components/BookList';
import BooksContext from './context/books';



function App() {
  const {fetchBooks}=useContext(BooksContext);


useEffect(()=>{
fetchBooks()
},[])

  return (
    <div className="App">

<CreateBooks />
<BookList />


    </div>
  );
}

export default App;
