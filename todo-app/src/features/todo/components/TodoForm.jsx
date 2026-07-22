import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    onAddTodo(newTodo);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    placeholder="Enter todo"
    />

      <Button type="submit">
    Add Todo
</Button>
    </form>
  );
}

export default TodoForm;