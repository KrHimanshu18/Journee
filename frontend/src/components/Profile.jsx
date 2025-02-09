import { React } from "react";

function Profile() {
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

      <section className="flex flex-col justify-center">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex">
              <img src="" alt="Profile Pic" />
              <div className="flex gap-5">
                <a href="" className="flex flex-col justify-center text-center">
                  <p className="font-semibold text-center text-white text-xl">
                    Post
                  </p>
                  <p className="font-semibold text-center text-white text-xl">
                    2
                  </p>
                </a>
                <a href="" className="flex flex-col justify-center text-center">
                  <p className="font-semibold text-center text-white text-xl">
                    Followers
                  </p>
                  <p className="font-semibold text-center text-white text-xl">
                    12
                  </p>
                </a>
                <a href="" className="flex flex-col justify-center text-center">
                  <p className="font-semibold text-center text-white text-xl">
                    Following
                  </p>
                  <p className="font-semibold text-center text-white text-xl">
                    4
                  </p>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center text-start">
              <h2 className="font-bold text-amber-300 text-xl">Kr_Himanshu</h2>
              <p className="font-bold text-xl text-white">
                Web Developer, Creating interactive and responsive web page
                design
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center text-start">
            <h2 className="bg-white text-black font-bold text-xl">
              I Think...
            </h2>
            <p className="text-white font-semibold text-xl">
              Success is not final, failure is not fatal: it is the courage to
              continue that counts.
            </p>
            <button className="bg-amber-300 text-black font-bold text-xl">
              Post
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <h2 className="bg-white text-black font-bold text-xl">
              @Kr_Himanshu
            </h2>
            <p className="text-amber-300 font-semibold text-xs">
              "Success is not merely the result of talent, luck, or
              circumstance, but the relentless pursuit of growth, the resilience
              to rise after every fall, and the courage to embrace uncertainty.
              It is forged in the quiet moments of perseverance, the unseen
              sacrifices, and the unwavering belief that progress, no matter how
              small, matters. Greatness is not reserved for the chosen few; it
              belongs to those who dare to dream, work tirelessly, and refuse to
              surrender to doubt. In the end, the journey defines us, the
              struggles shape us, and the determination to keep moving forward,
              despite all odds, is what truly sets us apart.
            </p>
            <div className="bg-white text-center">_</div>
          </div>
          <div className="flex flex-col">
            <h2 className="bg-white text-black font-bold text-xl">
              @Kr_Himanshu
            </h2>
            <p className="text-amber-300 font-semibold text-xs">
              "Success is not merely the result of talent, luck, or
              circumstance, but the relentless pursuit of growth, the resilience
              to rise after every fall, and the courage to embrace uncertainty.
              It is forged in the quiet moments of perseverance, the unseen
              sacrifices, and the unwavering belief that progress, no matter how
              small, matters. Greatness is not reserved for the chosen few; it
              belongs to those who dare to dream, work tirelessly, and refuse to
              surrender to doubt. In the end, the journey defines us, the
              struggles shape us, and the determination to keep moving forward,
              despite all odds, is what truly sets us apart.
            </p>
            <div className="bg-white text-center">_</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
