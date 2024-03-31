import TodoItem from "./TodoItem";

function TodoItems({ todoItems, deleteItem }) {
  return (
    <div class="container ">
      {todoItems.map((item) => (
        <TodoItem
          TodoDate={item.dueDate}
          TodoName={item.todoName}
          deleteItem={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
