import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ExpPost from "./ExpPost";
import { Menu, X } from "lucide-react";

function Explore() {
  const navigate = useNavigate();
  const { username, post, isOpen, setIsOpen } = useContext(LoginContext);

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
      <header className="flex justify-between items-center px-6 py-2 md:px-8 md:py-4 bg-[#212529] shadow-md text-white fixed w-full z-10">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 215, 0, 1)" }}
            className="w-[40px] h-[40px]"
          >
            <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path>
          </svg>
          <h1
            className="text-2xl md:text-4xl"
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
              color: "rgba(255, 215, 0, 1)",
            }}
          >
            JOURNEE
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block sm:hidden p-2 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`z-10 sm:flex items-center sm:gap-4 md:gap-6 ${
            isOpen
              ? "absolute top-full left-0 w-full bg-[#212529] flex flex-col gap-2 shadow-md p-4 rounded-b-md"
              : "hidden"
          } sm:flex`}
        >
          <a
            className="text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/", { replace: true });
              setIsOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/explore", { replace: true });
              setIsOpen(false);
            }}
          >
            Explore
          </a>
          <a
            className="text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => {
              navigate("/profile", { replace: true });
              setIsOpen(false);
            }}
          >
            Profile
          </a>
          <a
            href="#"
            className="text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Settings
          </a>
          {username === "Guest User" && (
            <button
              className="bg-[rgba(255,215,0,1)] xs:text-xs md:text-xl cursor-pointer font-['Montserrat'] font-bold px-3 md:px-5 md:py-2 rounded-lg text-black hover:bg-amber-500 transition duration-300"
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
            >
              Login
            </button>
          )}
        </div>
      </header>

      <section className="px-2 md:mx-20 pt-[20px] md:pt-[60px]">
        {post.map((item, index) => (
          <ExpPost key={index} username={username} content={item.content} />
        ))}
      </section>
    </div>
  );
}

export default Explore;
