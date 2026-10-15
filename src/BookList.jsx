import { useState } from "react";
import BookTitle from "./BookTitle";

function BookList(params) {
  let initialBooks = [
    {
      id: 1,
      title: "1984",
    },
    {
      id: 2,
      title: "Le prince",
    },
    {
      id: 3,
      title: "antigone",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  function updateTitle(newVal, index) {
    setBooks(
      books.map((book, i) => (i === index ? { ...book, title: newVal } : book)),
    );
  }
  
  function deleteTitle(id) {
    setBooks((books) => books.filter((book) => book.id !== id));
  }

  const [livre, setLivre] = useState("");

  function addNew(event) {
    event.preventDefault();

    let book = {
      id: books.length + 1,
      title: livre,
    };

    setBooks((books) => [...books, book]);
  }
  return (
    <div>
      List
      <form onSubmit={(e) => addNew(e)}>
        New book
        <input type="text" onChange={(e) => setLivre(e.target.value)} />
        <button type="submit">Enregistrer</button>
      </form>

      {books.map((book, index) => (
        <div key={book.id}>
          <BookTitle
            title={book.title}
            id={book.id}
            ondeleteTitle={deleteTitle}
            onupdateTitle={updateTitle}
            index={index}
          />
          {/* <button onClick={e => deleteTitle(e)}>Supprimer</button> */}
        </div>
      ))}
    </div>
  );
}

export default BookList;
