import { useState } from "react";
import "../style/UserRow.css";

function UserRow({ user, updatePermissions }) {
  const [permissions, setPermissions] = useState(
    user.permissions || []
  );

  // Handle Checkbox Change
  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      // Add permission
      setPermissions((prev) => [...prev, name]);
    } else {
      // Remove permission
      setPermissions((prev) =>
        prev.filter((permission) => permission !== name)
      );
    }
  };

  // Save Permissions
  const handleSave = () => {
    updatePermissions(user._id, permissions);
  };

  return (
    <tr>
      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <input
          type="checkbox"
          name="todo"
          checked={permissions.includes("todo")}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type="checkbox"
          name="weather"
          checked={permissions.includes("weather")}
          onChange={handleChange}
        />
      </td>

      <td>
        <button
          className="user-save-btn"
          onClick={handleSave}
        >
          Save
        </button>
      </td>
    </tr>
  );
}

export default UserRow;