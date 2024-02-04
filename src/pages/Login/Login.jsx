import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const [loginFormError, setLoginFormError] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoginFormError({
      email: false,
      password: false,
    });

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const emailValidation = emailRegex.test(loginFormData.email);
    const passwordValidation = passwordRegex.test(loginFormData.password);

    if (!emailValidation) {
      setLoginFormError((prevState) => ({ ...prevState, email: true }));
    }

    if (!passwordValidation) {
      setLoginFormError((prevState) => ({ ...prevState, password: true }));
    }

    if (emailValidation && passwordValidation) {
      navigate('/host', { replace: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='login'>
      <h1 className='login__title'>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className='login__form'>
        <input
          type='email'
          className='login__input'
          name='email'
          placeholder='Email address'
          value={loginFormData.email}
          onChange={handleChange}
        />
        {loginFormError.email && (
          <p className='login__error'>Please use a valid email address.</p>
        )}
        <input
          type='password'
          className='login__input'
          name='password'
          placeholder='Password'
          value={loginFormData.password}
          onChange={handleChange}
        />
        {loginFormError.password && (
          <p className='login__error'>
            Your password must be at least 8 characters long, and contain at
            least one uppercase letter, one lowercase letter, and one numeric
            digit.
          </p>
        )}
        <button className='login__submit-btn'>Log in</button>
      </form>
    </div>
  );
};

export default Login;
