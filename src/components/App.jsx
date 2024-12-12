import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [textInput, setText] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function handleClick() {
    textInput.trim() === ""
      ? null
      : setItem((prevValue) => {
        setText("");
          return [
            ...prevValue,
            {
              id: items.length + 1,
              content: textInput,
            },
          ];
        });
  }
  function deleteItem(id) {
    setItem((prevList) => {
      return prevList.filter((items) => {
        return items.id !== id;
      })
    })
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      
      <div className="input-container">
        <input onChange={handleChange} type="text" value={textInput}/>
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <TodoList onChange={deleteItem} key={item.id} id={item.id} content={item.content} />
        ))}
      </ul>
    </div>
  );
}

export default App;
