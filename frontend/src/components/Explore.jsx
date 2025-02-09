import { React } from "react";

function Explore() {
  return (
    <div className="h-screen bg-black">
      <header className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md text-white">
        <div className="flex items-center gap-2">
          <img
            src="./assets/book-solid-24.png"
            alt="notebook logo"
            className="h-10 w-10"
          />
          <h1 className="font-bold text-4xl text-amber-400">Journee</h1>
        </div>
        <div className="flex items-center gap-6">
          <a
            href=""
            className="font-semibold text-lg hover:text-amber-400 transition duration-300"
          >
            Home
          </a>
          <a
            href=""
            className="font-semibold text-lg hover:text-amber-400 transition duration-300"
          >
            Explore
          </a>
          <a
            href=""
            className="font-semibold text-lg hover:text-amber-400 transition duration-300"
          >
            Profile
          </a>
          <a
            href=""
            className="font-semibold text-lg hover:text-amber-400 transition duration-300"
          >
            Settings
          </a>
          <button className="bg-amber-400 px-5 py-2 rounded-lg text-black font-semibold hover:bg-amber-500 transition duration-300">
            Login
          </button>
        </div>
      </header>

      <section>
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-between">
            <p className="font-semibold text-xs text-white">@Kr_Himanshu</p>
            <button className="bg-amber-300 text-white">Follow</button>
          </div>

          <div className="flex justify-center">
            <p className="font-semibold text-xs text-white">
              Life's journey begins with a single step, but is true essence lies
              in the persistence to keep moving forward. The road may twist and
              turn, leading through uncertainty and challenge yet every obstacle
              is a lesson, ebrty detour a hidden opportunity. Embrace the
              unknown with courage, for growth is found in the struggles we
              overcome. Progress isn't measured by speed but by the strength to
              continue. The destination may be the goal, but the moments along
              the way befine who we truly are. Keep walking, keep learning and
              trust that every step shapes your story.
            </p>
          </div>

          <div className="flex justify-between">
            <a href="" className="flex gap-2">
              <img
                src="./components/assets/heart-solid-24.png"
                alt="Like icon"
              />
              <p className="font-semibold text-xs text-white">Like</p>
            </a>
            <a href="" className="flex gap-2">
              <img
                src="./components/assets/comment-solid-24.png"
                alt="Comment icon"
              />
              <p className="font-semibold text-xs text-white">Comment</p>
            </a>
            <a href="" className="flex gap-2">
              <img
                src="./components/assets/share-solid-24.png"
                alt="Share icon"
              />
              <p className="font-semibold text-xs text-white">Share</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
