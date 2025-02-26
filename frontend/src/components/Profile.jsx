import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Post from "./Post";
import { Menu, X } from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    postCount,
    follower,
    following,
    post,
    isOpen,
    setIsOpen,
  } = useContext(LoginContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const settingsOptions = [
    "Edit Profile",
    "Saved",
    "Account Privacy",
    "Help",
    "Privacy Center",
    "Account Status",
    "About",
    "Log out",
  ];

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
      <header className="flex justify-between items-center px-6 md:px-8 py-4 bg-[#212529] shadow-md text-white fixed w-full z-10">
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
            className="text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => setIsSettingsOpen(true)}
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

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#212529] z-20 transform transition-transform duration-300 ease-in-out ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white font-['Montserrat']">
              Settings
            </h3>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="text-white hover:text-amber-300 cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 p-4">
            {settingsOptions.map((option, index) => (
              <button
                key={index}
                className="cursor-pointer w-full text-left py-3 px-4 text-white font-['Montserrat'] text-lg hover:bg-[#2d3748] hover:text-amber-300 transition-colors duration-200 rounded-md"
                onClick={() => {
                  // Add specific navigation logic here if needed
                  if (option === "Log out") {
                    // Add logout logic here
                    console.log("Logging out...");
                    setUsername("Guest User");
                    navigate("/", { replace: true });
                  }
                  setIsSettingsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for curtain effect */}
      {isSettingsOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}

      <section className="flex flex-col pt-[60px]">
        <div className="flex flex-wrap gap-4 justify-between px-6 py-4 *:rounded-2xl w-full mx-auto space-y-6 md:space-y-0 my-12">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                className="bg-black rounded-full"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path>
              </svg>
              <div className="flex space-x-6 text-center">
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-2xl">Post</p>
                  <p className="text-white font-medium text-2xl">{postCount}</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-2xl">Followers</p>
                  <p className="text-white font-medium text-2xl">{follower}</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-2xl">Following</p>
                  <p className="text-white font-medium text-2xl">{following}</p>
                </a>
              </div>
            </div>

            <div className="text-left">
              <h2 className="text-amber-300 text-3xl py-2 font-semibold font-['Montserrat']">
                @{username}
              </h2>
              <p className="text-white font-medium font-['Montserrat'] text-2xl w-[75%] md:w-[60%]">
                Web Developer, Creating interactive and responsive web page
                designs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center bg-[#d9d9d9] rounded-2xl shadow-md w-full max-w-md border-white">
            <h2 className="bg-white font-semibold font-['Montserrat'] text-black text-2xl py-2 w-full rounded-t-xl text-start px-4">
              I Think...
            </h2>
            <textarea
              name=""
              id=""
              rows={12}
              className="w-[99%] bg-[#12202e] font-medium px-4 py-2 text-[#d9d9d9] text-xl"
              style={{ fontFamily: "PT Serif, serif" }}
            ></textarea>
            <button className="bg-amber-300 cursor-pointer font-['Montserrat'] font-bold text-black text-2xl px-6 py-2 w-full rounded-b-xl hover:bg-amber-400 transition duration-300">
              Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 my-4 pb-10 justify-center">
          {post.map((item, index) => (
            <Post key={index} username={username} content={item.content} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
