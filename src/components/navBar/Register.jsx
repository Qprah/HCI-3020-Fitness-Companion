import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "youremail@gmail.com"
  );
  const [passPlaceholder, setPassPlaceholder] = useState("********");
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name");

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

  const handleNameFocus = () => {
    setEmailPlaceholder("");
  };

  const handleNameBlur = () => {
    if (!email) {
      setNamePlaceholder("Full Name");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (email.trim() === "" || pass.trim() === "" || name.trim() === "") {
      console.error("Please enter both email and password.");
      return;
    }

    // Notify the parent component (NavBar) about the login
    props.onLogin(true);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder={namePlaceholder}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          style={{ color: "#888" }} // Lighter shade of grey
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder={emailPlaceholder}
          id="email"
          name="email"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          style={{ color: "#888" }} // Lighter shade of grey
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
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
