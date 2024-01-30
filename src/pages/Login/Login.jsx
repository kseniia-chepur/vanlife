import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({ 
    email: "", 
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData(prev => ({
          ...prev,
          [name]: value,
      }))
  }

  return (
    <div className="login">
      <h1 className="login__title">Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          type="email"
          className="login__input"
          name="email" 
          placeholder="Email address"
          value={loginFormData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="login__input"
          name="password"
          placeholder="Password"
          value={loginFormData.password}
          onChange={handleChange}
        />
        <button className="login__submit-btn">Log in</button>
      </form>
    </div>
  )
}

export default Login;