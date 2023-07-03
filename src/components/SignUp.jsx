import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

const SignUp = () => {
  const { register } = useContext(AuthContext);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(input);
    setInput({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen bg-[#121f3d] text-[#fff] flex flex-col justify-center items-center gap-8">
      <h1 className="text-5xl font-bold">Registrate</h1>
      <div className="bg-[#162b57] p-8 rounded-xl w-1/3">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Nombre :</label>
            <input
              className="outline-none p-2 rounded-md text-[#000]"
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={handleChange}
              placeholder="nombre"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Apellido :</label>
            <input
              className="outline-none p-2 rounded-md text-[#000]"
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={handleChange}
              placeholder="Apellido"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Nombre de usuario:</label>
            <input
              className="outline-none p-2 rounded-md text-[#000]"
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
              placeholder="nombre de usuario"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Correo Electronico / Usuario :</label>
            <input
              className="outline-none p-2 rounded-md text-[#000]"
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="email o usuario"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="">Contraseña :</label>
            <input
              className="outline-none p-2 rounded-md text-[#000]"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="contraseña"
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

export default SignUp;
