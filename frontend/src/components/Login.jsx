import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const {
    setUsername,
    password,
    setPassword,
    isSignUp,
    setIsSignUp,
    email,
    setEmail,
  } = useContext(LoginContext);
  const navigate = useNavigate();

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
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-3xl sm:text-4xl text-yellow-400 font-['Jacques_Francois_Shadow'] transition-transform hover:scale-105">
            JOURNEE
          </h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl text-yellow-400 font-['Kaushan_Script'] font-bold text-center drop-shadow-md">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>

          <div className="space-y-4">
            {isSignUp && (
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            )}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder={isSignUp ? "Create Password" : "Password"}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            className="w-full bg-yellow-400 text-black text-lg sm:text-xl font-['Montserrat'] font-semibold py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
            onClick={() => {
              navigate("/profile", { replace: true });
            }}
          >
            {isSignUp ? "SIGN UP" : "LOGIN"}
          </button>

          <div className="text-center">
            <p className="text-white/80 text-sm sm:text-base font-['Roboto']">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="text-yellow-400 hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
