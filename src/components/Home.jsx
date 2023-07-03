import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleClick = async () => {
    await logout();
  };

  return (
    <div className="bg-[#121f3d] h-screen text-white">
      <div className="flex w-full justify-evenly p-4">
        <h1 className="text-5xl font-bold">Home</h1>
        <button
          className="bg-red-600 text-[#fff] rounded-md  px-4 border-white-1"
          onClick={handleClick}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Home;
