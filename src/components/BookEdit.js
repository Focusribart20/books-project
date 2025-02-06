import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit (book.id,newTitle); 
  };

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input className="input" onChange={handleChange} value={newTitle} />
        <button className="button is-primary">save</button>
      </form>
    </div>
  );
}
export default BookEdit;
