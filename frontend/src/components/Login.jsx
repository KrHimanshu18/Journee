import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const { setUsername } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="Password" />
      <button
        onClick={() => {
          navigate("/profile", {
            replace: true,
          });
        }}
      >
        LOGIN
      </button>
    </div>
  );
}

export default Login;
