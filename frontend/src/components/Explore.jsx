import { React } from "react";

function Explore() {
  return (
    <div
      className="h-screen bg-[#12202e]"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-8 py-4 bg-[#212529] shadow-md text-[#d9d9d9]">
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
            href=""
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
            }}
            className="text-xl transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Home
          </a>
          <a
            href=""
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
            }}
            className="text-xl transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Explore
          </a>
          <a
            href=""
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
            }}
            className="text-xl transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Profile
          </a>
          <a
            href=""
            style={{ fontFamily: "'Jacques Francois Shadow', cursive" }}
            className="text-xl transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
          >
            Settings
          </a>
          <button
            className="bg-[rgba(255,215,0,1)] text-xl px-5 py-2 rounded-lg text-black font-semibold hover:bg-amber-500 transition duration-300"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Login
          </button>
        </div>
      </header>

      <section className="px-10 py-10 mx-28">
        <div className="flex flex-col justify-center text-center border-2 border-white rounded-2xl m-4 bg-gray-900 shadow-lg">
          <div className="flex justify-between items-center mb-3 bg-white rounded-t-2xl px-5 py-2">
            <p
              className="text-2xl text-black"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              @Kr_Himanshu
            </p>
            <button
              className="bg-[#12202e] text-[#d9d9d9] text-xl px-3 py-1 rounded-lg hover:bg-amber-400 hover:text-[#12202e] transition duration-300"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              Follow
            </button>
          </div>

          <div className="flex justify-center">
            <p
              className="text-2xl text-[#d9d9d9] leading-relaxed px-4"
              style={{ fontFamily: "'Leckerli One', cursive" }}
            >
              Life's journey begins with a single step, but its true essence
              lies in the persistence to keep moving forward. The road may twist
              and turn, leading through uncertainty and challenge, yet every
              obstacle is a lesson, every detour a hidden opportunity. Embrace
              the unknown with courage, for growth is found in the struggles we
              overcome. Progress isn't measured by speed but by the strength to
              continue. The destination may be the goal, but the moments along
              the way define who we truly are. Keep walking, keep learning, and
              trust that every step shapes your story.
            </p>
          </div>

          <div className="flex justify-between items-center mt-4 bg-white rounded-b-2xl px-5 py-2">
            <a
              href="#"
              className="flex items-center gap-2 hover:scale-105 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#12202e]"
              >
                <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
              </svg>
              <p
                className="text-xl text-black"
                style={{ fontFamily: "'Leckerli One', cursive" }}
              >
                Like
              </p>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:scale-105 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#12202e]"
              >
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
              </svg>
              <p
                className="text-xl text-black"
                style={{ fontFamily: "'Leckerli One', cursive" }}
              >
                Comment
              </p>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:scale-105 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#12202e]"
              >
                <path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path>
              </svg>
              <p
                className="text-xl text-black"
                style={{ fontFamily: "'Leckerli One', cursive" }}
              >
                Share
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
