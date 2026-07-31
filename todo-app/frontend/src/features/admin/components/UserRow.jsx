import { useState } from "react";
import "../style/UserRow.css";
function UserRow({ user, updatePermissions }) {
  const [permissions, setPermissions] = useState(user.permissions);

  // Handle Checkbox Change
  const handleChange = (e) => {
    const { name, checked } = e.target;

    setPermissions((prev) => ({
      ...prev,
      [name]: checked,
    }));
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
          checked={permissions.todo}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type="checkbox"
          name="weather"
          checked={permissions.weather}
          onChange={handleChange}
        />
      </td>

      <td>
        <button onClick={handleSave}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default UserRow;