function TodoItem({ TodoName, TodoDate, deleteItem }) {
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>

        <div class="col-2">
          <button
            type="button "
            class="btn btn-danger kg-button"
            onClick={() => deleteItem(TodoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
