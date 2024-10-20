import { useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setFormErrors({});
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const validateInputs = () => {
    let errors = {};

    if (!isLogin) {
      if (!firstName.trim()) {
        errors.firstName = "First name is required.";
      }
      if (!lastName.trim()) {
        errors.lastName = "Last name is required.";
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!validateInputs()) {
      return; // Stop form submission if validation fails
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h1>
      <form onSubmit={formSubmissionHandler}>
        {!isLogin && (
          <div className={classes.control}>
            {formErrors.firstName && (
              <p className={classes.error}>{formErrors.firstName}</p>
            )}
            <label htmlFor="fname">FIRST NAME</label>
            <input
              id="fname"
              type="text"
              value={firstName}
              onChange={firstNameChangeHandler}
            />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            {formErrors.lastName && (
              <p className={classes.error}>{formErrors.lastName}</p>
            )}
            <label htmlFor="lname">LAST NAME</label>
            <input
              id="lname"
              type="text"
              onChange={lastNameChangeHandler}
              value={lastName}
            />
          </div>
        )}
        <div className={classes.control}>
          {formErrors.email && (
            <p className={classes.error}>{formErrors.email}</p>
          )}
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            onChange={emailChangeHandler}
            value={email}
          />
        </div>
        <div className={classes.control}>
          {formErrors.password && (
            <p className={classes.error}>{formErrors.password}</p>
          )}
          <label htmlFor="password">PASSWORD</label>

          <input
            id="password"
            type="password"
            onChange={passwordChangeHandler}
            value={password}
          />
        </div>
        <div>
          <button className={classes.action} type="submit">
            {isLogin ? "SIGN IN" : "CREATE"}
          </button>
          {isLogin && (
            <p onClick={switchAuthModeHandler} className={classes.switchBtn}>
              Create account
            </p>
          )}
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
