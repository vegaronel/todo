import { useState } from "react";

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

  return (
    <div className="container">
      <h1>Todo List</h1>
      
      <div className="input-container">
        <input onChange={handleChange} type="text" value={textInput}/>
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
