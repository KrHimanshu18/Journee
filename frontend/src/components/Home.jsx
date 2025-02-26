import { React, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { Menu, X } from "lucide-react";
import "./styles.css";

function Home() {
  const navigate = useNavigate();
  const { username, isOpen, setIsOpen, quotes } = useContext(LoginContext);
  const [fadeState, setFadeState] = useState("fade-in");
  const [currInd, setCurrInd] = useState(0);
  const length = quotes.length;
  const isLoggedIn = username !== "Guest User";

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrInd((prevIndex) => (prevIndex + 1) % length);
        setFadeState("fade-in");
      }, 1000);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, [length]);

  return (
    <div
      className="bg-[#12202e] min-h-screen flex flex-col justify-between w-full"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-4 py-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-4 bg-[#212529] shadow-md text-white fixed w-full top-0 z-10">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 215, 0, 1)" }}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px]"
          >
            <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path>
          </svg>
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
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

        {/* Navigation Links or Login Button */}
        <div
          className={`z-10 sm:flex items-center sm:gap-2 md:gap-4 lg:gap-6 ${
            isOpen
              ? "absolute top-full left-0 w-full bg-[#212529] flex flex-col gap-2 shadow-md p-4 rounded-b-md"
              : "hidden"
          } sm:flex`}
        >
          {isLoggedIn ? (
            <>
              <a
                className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
                onClick={() => {
                  navigate("/", { replace: true });
                  setIsOpen(false);
                }}
              >
                Home
              </a>
              <a
                className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
                onClick={() => {
                  navigate("/explore", { replace: true });
                  setIsOpen(false);
                }}
              >
                Explore
              </a>
              <a
                className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
                onClick={() => {
                  navigate("/profile", { replace: true });
                  setIsOpen(false);
                }}
              >
                Profile
              </a>
            </>
          ) : (
            <button
              className="bg-[rgba(255,215,0,1)] text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer font-['Montserrat'] font-bold px-3 py-1 sm:px-4 md:px-5 md:py-2 rounded-lg text-black hover:bg-amber-500 transition duration-300 w-full sm:w-auto"
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

      <section className="flex flex-col items-center text-center py-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-6 sm:space-y-8 pt-[80px] sm:pt-[100px] md:pt-[120px]">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5">
          <h2
            className="text-[rgba(255,215,0,1)] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-md"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Share Your Thoughts
          </h2>
          <p
            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed w-full sm:w-[85%] md:w-[75%] lg:w-[65%]"
            style={{ fontFamily: "PT Serif, serif" }}
          >
            Easily write, edit, and share your ideas with the world. Our app
            lets you create content effortlessly and publish it online. Connect
            with others, express your thoughts, and inspire your audience-your
            voice matters and is just a click away from being heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
            {username === "Guest User" && (
              <button
                className="bg-[rgba(255,215,0,1)] cursor-pointer font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold py-2 px-4 sm:px-6 rounded-full shadow-md transition-all hover:bg-amber-500 hover:scale-105 w-full sm:w-auto"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
            {username !== "Guest User" && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2 w-full sm:w-auto">
                <button
                  className="cursor-pointer bg-white text-black font-['Montserrat'] font-semibold text-sm sm:text-base md:text-lg lg:text-xl py-2 px-4 sm:px-6 rounded-full shadow-md transition-all hover:bg-gray-100 hover:scale-105 w-full sm:w-auto"
                  onClick={() => {
                    navigate("/profile", {
                      replace: true,
                    });
                  }}
                >
                  Write
                </button>
                <button
                  className="bg-[rgba(255,215,0,1)] cursor-pointer font-['Montserrat'] text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold py-2 px-4 sm:px-6 rounded-full shadow-md transition-all hover:bg-amber-500 hover:scale-105 w-full sm:w-auto"
                  onClick={() => {
                    navigate("/explore", {
                      replace: true,
                    });
                  }}
                >
                  Explore
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className={`${fadeState} quote-container flex flex-col items-center space-y-2`}
        >
          <p
            className="text-[rgba(255,215,0,1)] text-lg sm:text-xl md:text-2xl font-semibold"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            {quotes[currInd].quote}
          </p>
          <h2
            className="text-[rgba(255,215,0,1)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            {quotes[currInd].by}
          </h2>
        </div>
      </section>

      <footer className="flex flex-col justify-center items-center text-center w-full px-4 py-4 sm:py-6">
        <div className="w-full border-b-2 border-white pb-3">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <a
              href="#"
              className="font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Home
            </a>
            <a
              href="#"
              className="font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Features
            </a>
            <a
              href="#"
              className="font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              About
            </a>
            <a
              href="#"
              className="font-semibold text-xs sm:text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              FAQs
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <p
            className="font-semibold text-xs sm:text-sm text-white opacity-80 transition-opacity duration-300 hover:opacity-100"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            ©2025 Company, Inc
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
