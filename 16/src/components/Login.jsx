import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength}  from '../util/validation'

export default function Login() {
  const [enterValues, setEnterValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const isValidEmail =
    didEdit.email &&
    !isEmail(enterValues.email) &&
    isNotEmpty(enterValues.email);
  const isValidPassword = didEdit.password && !hasMinLength(enterValues.password, 6);

  const handleSummit = (e) => {
    e.preventDefault();
    console.log(enterValues);
  };

  const handleValues = (identifier, event) => {
    setEnterValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));

    setDidEdit((precEdit) => ({
      ...precEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={handleSummit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleValues("email", e)}
          value={enterValues.email}
          error={isValidEmail && "Please enter a valid email"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(e) => handleValues("password", e)}
          onBlur={() => handleInputBlur("password")}
          value={enterValues.password}
          error={isValidPassword && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
