function TaskStats({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h2>Total Tasks: {tasks.length}</h2>
      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
}

export default TaskStats;