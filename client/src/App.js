import './App.css';
import BookList from './BookList';
import React from 'react'
import {useState, useEffect} from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/books/")
    .then((response) => response.json())
    .then((data) => {
      setList(data)
      console.log(data)
  });
  }, []);

return(
      <div className='app'>
        <div class="book-display">
        <BookList key={list.id} list={list}/>
        </div>
      </div>
  
  )
}
export default App;
