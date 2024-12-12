function TodoList(props) {
    function handleDelete() {
       return props.onChange(props.id);
    }
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <li key={props.id}>{props.content}</li>
      <button onClick={handleDelete}>✔️</button>
    </div>
  );
}

export default TodoList;