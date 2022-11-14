import { useState } from 'react'
import "./index.css";

// 1. Napraw niedzialajacy button (+)
// 2. Wyswietl imie wpisane w input (+)
// 3. Wyswietl liste, ktora jest w state (+)
// 4. Kazdy element listy wyswietl w elemencie <li> (+)
// 5. Gdybys musial usunac jakis element listy, jakbys to zrobil? (+)
// 6. Czy kod mozna poprawic? (+)

function App() {
  const [counter, setCounter] = useState(2);

  const [list, setList] = useState([
    {
      id: 1,
      name: "Anna"
    },
    {
      id: 2,
      name: "Tom"
    }
  ]);
  const [name, setName] = useState("");

  const addName = (name) => {
    const newPerson = {
      name: name,
      id: Math.random()
    };
    setList([...list, newPerson]);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    setCounter(counter + 1);
    e.preventDefault();
    name && addName(name);
    setName("");
  };

  const handleSubtract = (id) => {
    setCounter(counter - 1);
    const newList = list.filter((name) => {
      console.log(name, id);
      return name.id !== id;
    });
    console.log("newlist", newList);
    setList(newList);
  };

  return (
    <div className="container">
      <Form name={name} counter={counter} handleChange={handleChange}>
        <ActionButton text="Dodaj imię!" onClick={handleAdd} />
      </Form>

      <aside className="sidebar">
        <section>
          <h3>
            <b>Twoje imie: {name}</b>
          </h3>
        </section>

        <section>
          <h3>
            <b>Lista: </b>
          </h3>
          <List list={list} handleRemoveClick={handleSubtract} />
        </section>
      </aside>
    </div>
  );
};

const ActionButton = ({ onClick, text }) => {
  return (
    <button data-test-id="action-button" type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

const Form = ({ name, counter, handleChange, children }) => {
  return (
    <form data-test-id="form" className="container">
      <div>{children}</div>
      <label>Wpisz swoje imię</label>
      <input
        id="name"
        type="text"
        value={name}
        placeholder=""
        onChange={handleChange}
      />

      <h3>
        <b>Wynik: </b>
      </h3>
      <p>{counter}</p>
    </form>
  );
};

const List = ({ list, handleRemoveClick }) => {
  return (
    <ul data-test-id="list">
      {list.map((name) => (
        <li key={name.id}>
          {name.name}
          <ActionButton text="x" onClick={() => handleRemoveClick(name.id)} />
        </li>
      ))}
    </ul>
  );
};

export default App;
