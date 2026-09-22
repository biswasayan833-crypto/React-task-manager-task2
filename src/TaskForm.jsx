function TaskForm({ newTask, setNewTask, addTask }) {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;