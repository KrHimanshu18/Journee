import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const { setUsername } = useContext(LoginContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  return (
    <div
      className="bg-[#12202e] min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="w-full max-w-md bg-[#212529]/95 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="fill-yellow-400 transition-transform hover:scale-110"
          >
            <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path>
          </svg>
          <h1 className="text-3xl sm:text-4xl text-yellow-400 font-['Jacques_Francois_Shadow'] transition-transform hover:scale-105">
            JOURNEE
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl text-yellow-400 font-['Kaushan_Script'] font-bold text-center drop-shadow-md">
            Welcome Back
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 font-['Montserrat'] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 font-['Montserrat'] text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button
            className="w-full bg-yellow-400 text-black text-lg sm:text-xl font-['Montserrat'] font-semibold py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
            onClick={() => {
              navigate("/profile", { replace: true });
            }}
          >
            LOGIN
          </button>

          {/* Additional Links */}
          <div className="text-center">
            <p className="text-white/80 text-sm sm:text-base font-['Roboto']">
              Don't have an account?{" "}
              <span
                className="text-yellow-400 hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Login;
