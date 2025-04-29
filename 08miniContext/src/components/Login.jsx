import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
   e.preventDefault()
   setUser({username, password})
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-100 w-100 flex-col items-center rounded-2xl bg-orange-500 text-center">
        <h2 className="py-8 text-4xl text-white">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          className="mb-5 w-60 rounded-4xl bg-white px-2 py-2 text-center text-orange-500 outline-none"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          className="w-60 rounded-4xl bg-white px-2 py-2 text-center text-orange-500 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="mt-5 rounded bg-white px-2 py-1 text-2xl text-orange-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
