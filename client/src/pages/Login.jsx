import React from "react";
import { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from "../redux/features/userSlice"

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeValue = (e) => {
    const { name, value } = e.target;

    setError("");
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}login`, user)
      .then((res) => {
        console.log(res)
        dispatch(login())
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  return (
    <div>
      <Header />
      <div className="flex w-[75vw]] h-[75vh] justify-center my-32 mx-10">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-[720px] lg:w-[960px] xl:w-[1140px]"
        >
          {error && <div className="text-3xl text-red-500 my-3">{error}</div>}
          <label
            htmlFor="username"
            className="text-xl font-black text-blue-900"
          >
            Username
          </label>
          <input
            onChange={changeValue}
            name="username"
            type="text"
            placeholder="username"
            className="text-xl p-2 mb-4"
          />
          <label
            htmlFor="password"
            className="text-xl font-black text-blue-900"
          >
            Password
          </label>
          <input
            onChange={changeValue}
            type="password"
            name="password"
            placeholder="password"
            className="text-xl p-2 mb-4"
          />
          <button className="text-white text-xl font-black">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
