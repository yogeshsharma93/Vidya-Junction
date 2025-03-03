import "./Login.scss";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3003/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((data) => data);
    if (res.error) {
      alert(res.error);
      navigate("/signup");
    } else {
      alert(res.message);
    }
    navigate("/slot");
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="overlay"></div>
        <div className="loginForm">
          <p>Login</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChange}
              value={formData.id}
            />
            <input
              type="text"
              onChange={onChange}
              placeholder="Password"
              name="password"
              value={formData.password}
            />
            <button className="primary" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
