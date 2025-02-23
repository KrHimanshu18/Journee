import { React } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#12202e] h-screen"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-8 py-4 bg-[#212529] shadow-md text-white">
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
          <button
            className="bg-[rgba(255,215,0,1)] text-xl cursor-pointer font-bold px-5 py-2 rounded-lg text-black hover:bg-amber-500 transition duration-300"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Login
          </button>
        </div>
      </header>

      <section className="flex flex-col items-center text-center py-10 px-6 space-y-8">
        <div className="flex flex-col items-center max-w-lg space-y-5">
          <h2
            className="text-[rgba(255,215,0,1)] font-bold text-6xl drop-shadow-md"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Share Your Thoughts
          </h2>
          <p
            className="text-white font-bold text-xl leading-relaxed"
            style={{ fontFamily: "PT Serif, serif" }}
          >
            Easily write, edit, and share your ideas with the world. Our app
            lets you create content effortlessly and publish it online. Connect
            with others, express your thoughts, and inspire your audience-your
            voice matters and is just a click away from being heard.
          </p>
          <div className="flex gap-5 mt-2">
            <button
              className="bg-[rgba(255,215,0,1)] cursor-pointer text-xl text-black font-semibold py-2 px-6 rounded-full shadow-md transition-all hover:bg-amber-500 hover:scale-105"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Login
            </button>
            <button
              className="cursor-pointer bg-white text-black font-semibold text-xl py-2 px-6 rounded-full shadow-md transition-all hover:bg-gray-100 hover:scale-105"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Write
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <p
            className="text-[rgba(255,215,0,1)] text-xl font-semibold"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            "Success is not the key to happiness. Happiness is the key to
            success."
          </p>
          <h2
            className="text-[rgba(255,215,0,1)] text-2xl font-semibold"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Albert Schweitzer
          </h2>
        </div>
      </section>

      <footer className="flex flex-col justify-center items-center text-center w-full">
        <div className="w-full border-b-2 border-white pb-3">
          <div className="flex justify-center gap-5">
            <a
              href="#"
              className="font-semibold text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Home
            </a>
            <a
              href="#"
              className="font-semibold text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Features
            </a>
            <a
              href="#"
              className="font-semibold text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              About
            </a>
            <a
              href="#"
              className="font-semibold text-sm text-white transition-all duration-300 hover:text-amber-400 hover:scale-105"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              FAQs
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <p
            className="font-semibold text-sm text-white opacity-80 transition-opacity duration-300 hover:opacity-100"
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
