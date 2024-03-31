import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          {/* <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleNameChange}
            value={todoName}
          /> */}

          <div class="input-group mb-3">
            <input
              type="text"
              placeholder="Enter todo here"
              onChange={handleNameChange}
              value={todoName}
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div class="col-4 ">
          <div class="input-group mb-3">
            <input
              type="date"
              onChange={handleDueDateChange}
              value={dueDate}
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div class="col-2">
          <button
            type="button "
            class="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
