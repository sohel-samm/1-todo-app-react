import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
//import Todo1 from "./components/Todo1";
//import Todo2 from "./components/Todo2";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { todoName: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.todoName !== itemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <AppName></AppName>

      <div className="items-container">
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItems}
          deleteItem={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
