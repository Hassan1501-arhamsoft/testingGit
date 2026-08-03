import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"; 
import '../style/LoginForm.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await login(formData);

    alert(response.message);

    setFormData({
      email: "",
      password: "",
    });

    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="login-container">
    <div className="login-card">
      <h2>Welcome Back</h2>
      <p>Login to your account</p>

      <form onSubmit={handleSubmit} className="login-form">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="password-input-container">
  <Input
    name="password"
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={formData.password}
    onChange={handleChange}
    autoComplete="current-password"
  />

  <span
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Button
          type="button"
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </form>
    </div>
  </div>
  );
}

export default LoginForm;