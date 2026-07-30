import UserRow from "./UserRow";

function UserTable({ users, updatePermissions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Todo</th>
          <th>Weather</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <UserRow
            key={user._id}
            user={user}
            updatePermissions={updatePermissions}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;