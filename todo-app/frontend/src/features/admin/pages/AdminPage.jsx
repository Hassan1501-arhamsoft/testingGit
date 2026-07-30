import useAdmin from "../hooks/useAdmin";
import UserTable from "../components/UserTable";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
function AdminPage() {
    const navigate = useNavigate();
  const {
    users,
    loading,
    error,
    updatePermissions,
  } = useAdmin();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <UserTable
        users={users}
        updatePermissions={updatePermissions}
      />
      <Button onClick={() => navigate("/dashboard")}>
    ← Back to Dashboard
    </Button>
    </div>
  );
}

export default AdminPage;