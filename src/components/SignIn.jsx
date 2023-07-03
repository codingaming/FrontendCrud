import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

const SignIn = () => {
  const [input, setInput] = useState({
    user: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    const data = { username: input.user, password: input.password };
    e.preventDefault();
    await login(data);
    setInput({ user: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="h-screen bg-[#121f3d] text-[#fff] flex flex-col justify-center items-center gap-8">
      <h1 className="text-5xl font-bold">Inicia Sesion</h1>
      <div className="bg-[#162b57] p-8 rounded-xl">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Correo Electronico / Usuario :</label>
            <input
              name="user"
              value={input.user}
              className="outline-none p-2 rounded-md text-black"
              type="text"
              placeholder="email o usuario"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Contraseña :</label>
            <input
              name="password"
              value={input.password}
              className="outline-none p-2 rounded-md text-black"
              type="password"
              placeholder="contraseña"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#121f3d] text-[#fff] rounded-md py-2 px-4"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
