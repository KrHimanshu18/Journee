import { React } from "react";

function Home() {
  return (
    <div className="h-screen bg-black">
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

      <section className="flex flex-col justify-center text-center">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-amber-400 font-bold text-3xl">
            Share Your Thoughts
          </h2>
          <p className="text-white font-semibold text-xl">
            Easily write, edit, and share your ideas with the world. Our app
            lets you create content effortlessly and publish it online. Connect
            with others, express your thoughts, and inspire your audience-your
            voice matters and is just a click away from being heard.
          </p>
          <div className="flex justify-center gap-5">
            <button className="bg-amber-400">Login</button>
            <button className="bg-white">Write</button>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center">
          <p className="text-center text-amber-300 text-xs font-semibold">
            Success is not the key to happiness. Happiness is the key to
            success.
          </p>
          <h2 className="text-amber-400 text-xl font-semibold">
            Albert Schweitzer
          </h2>
        </div>
      </section>

      <footer className="flex flex-col justify-center text-center">
        <div className="flex justify-center gap-3">
          <a href="" className="font-semibold text-xs text-white">
            Home
          </a>
          <a href="" className="font-semibold text-xs text-white">
            Features
          </a>
          <a href="" className="font-semibold text-xs text-white">
            About
          </a>
          <a href="" className="font-semibold text-xs text-white">
            FAQs
          </a>
        </div>
        <div className="flex justify-center">
          <p className="font-semibold text-xs text-white">©2025 Company, Inc</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
