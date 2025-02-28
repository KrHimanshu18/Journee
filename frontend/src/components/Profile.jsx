import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Post from "./Post";
import { Menu, X } from "lucide-react";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    postCount,
    setPostCount,
    follower,
    following,
    post,
    setPost,
    isOpen,
    setIsOpen,
  } = useContext(LoginContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:8787";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postRes = await axios.get(`${url}/getPost`, {
          params: {
            username: username,
          },
        });
        setPost(postRes.data.posts);
        setPostCount(postRes.data.posts.length);
        console.log(postRes.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div
      className="bg-[#12202e] min-h-screen w-full"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-4 bg-[#212529] shadow-md text-white fixed w-full top-0 z-10">
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
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap overflow-hidden text-ellipsis"
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
          className={`z-10 sm:flex items-center sm:gap-2 md:gap-4 lg:gap-6 ${
            isOpen
              ? "absolute top-full left-0 w-full bg-[#212529] flex flex-col gap-2 shadow-md p-4 rounded-b-md"
              : "hidden"
          } sm:flex`}
        >
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
          <a
            className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => setIsSettingsOpen(true)}
          >
            Settings
          </a>
          {username === "Guest User" && (
            <button
              className="bg-[rgba(255,215,0,1)] text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer font-['Montserrat'] font-bold px-3 py-1 sm:px-4 md:px-5 md:py-2 rounded-lg text-black hover:bg-amber-500 transition duration-300"
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
        className={`fixed top-0 right-0 h-full w-56 sm:w-64 md:w-72 lg:w-80 bg-[#212529] z-20 transform transition-transform duration-300 ease-in-out ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-700">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-['Montserrat']">
              Settings
            </h3>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="text-white hover:text-amber-300 cursor-pointer"
            >
              <X size={20} sm:size={24} />
            </button>
          </div>
          <div className="flex-1 p-3 sm:p-4">
            {settingsOptions.map((option, index) => (
              <button
                key={index}
                className="cursor-pointer w-full text-left py-2 sm:py-3 px-3 sm:px-4 text-white font-['Montserrat'] text-base sm:text-lg md:text-lg hover:bg-[#2d3748] hover:text-amber-300 transition-colors duration-200 rounded-md"
                onClick={() => {
                  if (option === "Log out") {
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

      <section className="flex flex-col pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between py-4 w-full max-w-7xl mx-auto space-y-4 md:space-y-0 my-8 sm:my-10 md:my-12">
          <div className="flex flex-col items-start space-y-3 sm:space-y-4 w-full md:w-2/3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                className="bg-black rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"></path>
              </svg>
              <div className="flex space-x-4 sm:space-x-6 text-center">
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                    Post
                  </p>
                  <p className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                    {postCount}
                  </p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                    Followers
                  </p>
                  <p className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                    {follower}
                  </p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                >
                  <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                    Following
                  </p>
                  <p className="text-white font-medium text-lg sm:text-xl md:text-2xl">
                    {following}
                  </p>
                </a>
              </div>
            </div>

            <div className="text-left">
              <h2 className="text-amber-300 text-xl sm:text-2xl md:text-3xl py-1 sm:py-2 font-semibold font-['Montserrat']">
                @{username}
              </h2>
              <p className="text-white font-medium font-['Montserrat'] text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:w-[85%] md:w-[75%] lg:w-[60%]">
                Web Developer, Creating interactive and responsive web page
                designs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center bg-[#d9d9d9] rounded-2xl shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md border-white">
            <h2 className="bg-white font-semibold font-['Montserrat'] text-black text-lg sm:text-xl md:text-2xl py-1 sm:py-2 w-full rounded-t-xl text-start px-3 sm:px-4">
              I Think...
            </h2>
            <textarea
              name=""
              id=""
              rows={10}
              className="w-[99%] bg-[#12202e] font-medium px-3 sm:px-4 py-2 text-[#d9d9d9] text-base sm:text-lg md:text-xl"
              style={{ fontFamily: "PT Serif, serif" }}
            ></textarea>
            <button className="bg-amber-300 cursor-pointer font-['Montserrat'] font-bold text-black text-lg sm:text-xl md:text-2xl px-4 sm:px-6 py-1 sm:py-2 w-full rounded-b-xl hover:bg-amber-400 transition duration-300">
              Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12 my-4 pb-10">
          {!loading &&
            post.map((item, index) => <Post key={index} post={item} />)}
        </div>
      </section>
    </div>
  );
}

export default Profile;
