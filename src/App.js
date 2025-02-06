import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from "./components/BookList";


function App() {
    const [books, setBooks] = useState([]);

// Here below we update a book piece of state when edited from bookEdit since we received signal from it
    const editBookById = (id,newTitle)=>{
        const updatedBooks = books.map((book)=>{
            if (book.id===id) {
              return  {...books,title: newTitle };
            }
            return book; //if a book not edited return it
        });
        setBooks(updatedBooks);
    };

    //Here we are deleting a book with id 
    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id ;
        });
       setBooks(updatedBooks);
    };

    //Here we are adding a title
    const createBook = (title) => {
       const updatedBooks = [
        ...books,
        {
            id: Math.round(Math.random()*9999), title   //We generate a random id's
        } 
    ];
        setBooks(updatedBooks);
    };

    return ( 
        <div className="app"> 
        <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
    };
    export default App;