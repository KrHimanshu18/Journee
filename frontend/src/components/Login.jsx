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
      className="bg-[#12202e] min-h-screen flex items-center justify-center px-2 xs:px-4 sm:px-6 md:px-8 py-8 sm:py-12 w-full"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg bg-[#212529]/95 backdrop-blur-sm rounded-xl shadow-xl p-4 xs:p-6 sm:p-8 animate-fade-in">
        <div className="flex items-center justify-center gap-2 xs:gap-3 mb-6 sm:mb-8">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-yellow-400 font-['Jacques_Francois_Shadow'] transition-transform hover:scale-105">
            JOURNEE
          </h1>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-['Kaushan_Script'] font-bold text-center drop-shadow-md">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {isSignUp && (
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            )}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder={isSignUp ? "Create Password" : "Password"}
              className="w-full px-3 xs:px-4 py-2 xs:py-3 rounded-lg bg-white/10 text-white placeholder-white/60 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            className="w-full bg-yellow-400 text-black text-base xs:text-lg sm:text-xl md:text-2xl font-['Montserrat'] font-semibold py-2 xs:py-3 sm:py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
            onClick={() => {
              navigate("/profile", { replace: true });
            }}
          >
            {isSignUp ? "SIGN UP" : "LOGIN"}
          </button>

          <div className="text-center">
            <p className="text-white/80 text-xs xs:text-sm sm:text-base md:text-lg font-['Roboto']">
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
