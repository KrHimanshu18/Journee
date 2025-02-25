import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ExpPost from "./ExpPost";

function Explore() {
  const navigate = useNavigate();
  const { username } = useContext(LoginContext);
  const { post } = useContext(LoginContext);

  return (
    <div
      className="bg-[#12202e] min-h-screen"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-8 py-4 bg-[#212529] shadow-md text-white fixed w-full">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 215, 0, 1)" }}
          >
            <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path>
          </svg>
          <h1
            className="text-3xl"
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
              color: "rgba(255, 215, 0, 1)",
            }}
          >
            JOURNEE
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <a
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/", {
                replace: true,
              });
            }}
          >
            Home
          </a>
          <a
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/explore", {
                replace: true,
              });
            }}
          >
            Explore
          </a>
          <a
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/profile", {
                replace: true,
              });
            }}
          >
            Profile
          </a>
          <a
            href=""
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Settings
          </a>
          {username == "Guest User" && (
            <button
              className="bg-[rgba(255,215,0,1)] text-xl cursor-pointer font-bold px-5 py-2 rounded-lg text-black hover:bg-amber-500 transition duration-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
      </header>

      <section className="px-10 mx-28 pt-[100px]">
        {post.map((item, index) => (
          <ExpPost key={index} username={username} content={item.content} />
        ))}
      </section>
    </div>
  );
}

export default Explore;
