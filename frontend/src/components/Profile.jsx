import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Post from "./Post";

function Profile() {
  const navigate = useNavigate();
  const { username } = useContext(LoginContext);
  const { postCount } = useContext(LoginContext);
  const { follower } = useContext(LoginContext);
  const { following } = useContext(LoginContext);
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

      <section className="flex flex-col">
        <div className="flex flex-wrap md:flex-nowrap justify-between px-6 py-4 *:rounded-2xl w-full mx-auto space-y-6 md:space-y-0 my-12">
          <div className="flex flex-col items-center md:items-start space-y-4">
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
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <p className="text-white font-bold text-2xl">Post</p>
                  <p className="text-white font-medium text-2xl">{postCount}</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <p className="text-white font-bold text-2xl">Followers</p>
                  <p className="text-white font-medium text-2xl">{follower}</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <p className="text-white font-bold text-2xl">Following</p>
                  <p className="text-white font-medium text-2xl">{following}</p>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2
                className="text-amber-300 text-3xl py-2 font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                @{username}
              </h2>
              <p
                className="text-white font-medium text-2xl w-[60%]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Web Developer, Creating interactive and responsive web page
                designs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center bg-[#d9d9d9] rounded-2xl shadow-md w-full max-w-md border-white">
            <h2
              className="bg-white font-semibold text-black text-2xl py-2 w-full rounded-t-xl text-start px-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              I Think...
            </h2>
            <textarea
              name=""
              id=""
              rows={12}
              className="w-[99%] bg-[#12202e] font-medium px-4 py-2 text-[#d9d9d9] text-xl"
              style={{ fontFamily: "PT Serif, serif" }}
            ></textarea>
            <button
              className="bg-amber-300 cursor-pointer font-bold text-black text-2xl px-6 py-2 w-full rounded-b-xl hover:bg-amber-400 transition duration-300"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Post
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mx-12 my-4 pb-10 justify-center">
          {post.map((item, index) => (
            <Post key={index} username={username} content={item.content} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;
