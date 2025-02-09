import { React } from "react";

function Home() {
  return (
    <div className="h-screen bg-black">
      <header className="flex justify-between px-3">
        <div className="flex gap-2">
          <img src="./assets/book-solid-24.png" alt="notebook logo" />
          <h1 className="font-bold text-2xl text-amber-400">Journee</h1>
        </div>
        <div className="flex gap-4">
          <a href="" className="font-semibold text-xl text-white">
            Home
          </a>
          <a href="" className="font-semibold text-xl text-white">
            Explore
          </a>
          <a href="" className="font-semibold text-xl text-white">
            Profile
          </a>
          <a href="" className="font-semibold text-xl text-white">
            Settings
          </a>
          <button className="bg-amber-400">Login</button>
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
