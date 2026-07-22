import { useState } from "react";
import "../../todo/style/TodoCard.css";

import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

function TodoCard({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    if (!title.trim()) return;

    onEdit(todo.id, title);
    setEditing(false);
  };

  return (
    <div className="todo-card">
      <div className="todo-card-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        {editing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span
            className={`todo-title ${
              todo.completed ? "completed" : ""
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {editing ? (
          <Button onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button onClick={() => setEditing(true)}>
            Edit
          </Button>
        )}

        <Button onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoCard;