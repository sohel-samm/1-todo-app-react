import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import "./App.css";

function App() {
  return (
    <center>
      <AppName></AppName>

      <div className="items-container">
        <AddTodo></AddTodo>
        <Todo1></Todo1>
        <Todo2></Todo2>
      </div>
    </center>
  );
}

export default App;
