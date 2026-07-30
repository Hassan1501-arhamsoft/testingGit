import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import useTodos from "../hooks/UseTodo";
import "../style/TodoPage.css";

function TodoPage() {
    const navigate = useNavigate();

  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  } = useTodos();

  return (
    <div
      className="todo-page"
    >
      <Button onClick={() => navigate("/dashboard")}>
    ← Back to Dashboard
    </Button>
      <h1>Todo App</h1>

      <TodoForm onAddTodo={addTodo} />

      <hr />

      <h3>Total Todos: {todos.length}</h3>

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default TodoPage;