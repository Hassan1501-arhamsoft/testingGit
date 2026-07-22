import TodoCard from "./TodoCard";

function TodoList({
    todos,
    onDelete,
    onToggle,
    onEdit,
}) {
  if (todos.length === 0) {
    return <p>No todos available. Add your first todo!</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
    key={todo.id}
    todo={todo}
    onDelete={onDelete}
    onToggle={onToggle}
    onEdit={onEdit}
/>
      ))}
    </div>
  );
}

export default TodoList;