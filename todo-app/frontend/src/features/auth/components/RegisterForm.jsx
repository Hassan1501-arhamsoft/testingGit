import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"; 
import '../style/RegisterForm.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, loading } = useAuth();
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login")
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
    <div className="register-card">
      <h2>Create Account</h2>
      <p>Register to continue</p>

      <form onSubmit={handleSubmit} className="register-form">
        <Input
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

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
    autoComplete="new-password"
  />

  <span
    className="password-toggle"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

        <div className="password-input-container">
  <Input
    name="confirmPassword"
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm password"
    value={formData.confirmPassword}
    onChange={handleChange}
    autoComplete="new-password"
  />

  <span
    className="password-toggle"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
  >
    {showConfirmPassword ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}
  </span>
</div>

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>

        <Button
          type="button"
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </form>
    </div>
  </div>
  );
}

export default RegisterForm;