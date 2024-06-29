import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "youremail@gmail.com"
  );
  const [passPlaceholder, setPassPlaceholder] = useState("********");

  const handleEmailFocus = () => {
    setEmailPlaceholder("");
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailPlaceholder("youremail@gmail.com");
    }
  };

  const handlePassFocus = () => {
    setPassPlaceholder("");
  };

  const handlePassBlur = () => {
    if (!pass) {
      setPassPlaceholder("********");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password 
    if (email.trim() === "" || pass.trim() === "") {
      console.error("Please enter both email and password.");
      return;
    }

    // Notify the parent component (NavBar) about the login
    props.onLogin(true);
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder={emailPlaceholder}
          id="email"
          name="email"
          style={{ color: "#888" }}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder={passPlaceholder}
          id="password"
          name="password"
          onFocus={handlePassFocus}
          onBlur={handlePassBlur}
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
