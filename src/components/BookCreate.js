import { useState } from "react";

function BookCreate( {onCreate} ) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
    {/* <BookList books = {books}/> */}
      <h3>Add your book title.</h3>
      <form  onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">create</button>
      </form>
    </div>
  );
}
export default BookCreate;
