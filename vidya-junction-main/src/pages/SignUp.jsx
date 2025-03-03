import "./SignUp.scss";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    let { name, phoneNumber, email, password, schoolName } = e.target;
    let res = await fetch("http://localhost:3003/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        password: password.value,
        schoolName: schoolName.value,
      }),
    })
      .then((data) => data.json())
      .then((data) => data);
    if (res.error) {
      alert(res.error);
      navigate("/signUp");
    } else {
      alert(res.message);
      navigate("/signIn");
    }
  };
  return (
    <div id="signup">
      <Navbar />
      <div class="container">
        <form id="signupForm" onSubmit={onSubmit}>
          <h2>Signup</h2>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phoneNumber" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="form-group">
            <label for="name">School Name</label>
            <input type="text" id="school" name="schoolName" required />
          </div>
          <div class="form-group">
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
