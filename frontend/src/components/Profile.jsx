import { React } from "react";

function Profile() {
  return (
    <div
      className="bg-[#12202e]"
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
                  style={{ fontFamily: "'Kaushan Script', cursive" }}
                >
                  <p className="text-white text-2xl">Post</p>
                  <p className="text-white text-2xl">2</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                  style={{ fontFamily: "'Kaushan Script', cursive" }}
                >
                  <p className="text-white text-2xl">Followers</p>
                  <p className="text-white text-2xl">12</p>
                </a>
                <a
                  href="#"
                  className="flex flex-col hover:text-amber-300 transition"
                  style={{ fontFamily: "'Kaushan Script', cursive" }}
                >
                  <p className="text-white text-2xl">Following</p>
                  <p className="text-white text-2xl">4</p>
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2
                className="text-amber-300 text-3xl py-2"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                @Kr_Himanshu
              </h2>
              <p
                className="text-white font-medium text-2xl w-[80%]"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                Web Developer, Creating interactive and responsive web page
                designs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center bg-[#d9d9d9] rounded-2xl shadow-md w-full max-w-md border-white">
            <h2
              className="bg-white text-black text-2xl py-2 w-full rounded-t-xl"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              I Think...
            </h2>
            <textarea
              name=""
              id=""
              rows={12}
              className="w-[99%] bg-[#12202e] px-4 py-2 text-[#d9d9d9] text-xl"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            ></textarea>
            <button
              className="bg-amber-300 text-black text-2xl px-6 py-2 w-full rounded-b-xl hover:bg-amber-400 transition duration-300"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              Post
            </button>
          </div>
        </div>

        <div className="flex gap-6 mx-12 my-4">
          <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
            <h2
              className="bg-white text-black text-xl px-6 py-2 rounded-t-md"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              @Kr_Himanshu
            </h2>
            <p
              className="text-amber-300 text-xl px-6 mt-2 leading-relaxed"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              "Success is not merely the result of talent, luck, or
              circumstance, but the relentless pursuit of growth, the resilience
              to rise after every fall, and the courage to embrace uncertainty.
              It is forged in the quiet moments of perseverance, the unseen
              sacrifices, and the unwavering belief that progress, no matter how
              small, matters. Greatness is not reserved for the chosen few; it
              belongs to those who dare to dream, work tirelessly, and refuse to
              surrender to doubt. In the end, the journey defines us, the
              struggles shape us, and the determination to keep moving forward,
              despite all odds, is what truly sets us apart."
            </p>
            <div className="bg-white text-center text-gray-600 font-medium mt-3 py-2 px-3 border rounded-b-lg cursor-pointer transition-colors hover:bg-gray-100">
              _
            </div>
          </div>

          <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
            <h2
              className="bg-white text-black text-xl px-6 py-2 rounded-t-md"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              @Kr_Himanshu
            </h2>
            <p
              className="text-amber-300 text-xl px-6 mt-2 leading-relaxed"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              "Success is not merely the result of talent, luck, or
              circumstance, but the relentless pursuit of growth, the resilience
              to rise after every fall, and the courage to embrace uncertainty.
              It is forged in the quiet moments of perseverance, the unseen
              sacrifices, and the unwavering belief that progress, no matter how
              small, matters. Greatness is not reserved for the chosen few; it
              belongs to those who dare to dream, work tirelessly, and refuse to
              surrender to doubt. In the end, the journey defines us, the
              struggles shape us, and the determination to keep moving forward,
              despite all odds, is what truly sets us apart."
            </p>
            <div className="bg-white text-center text-gray-600 font-medium mt-3 py-2 px-3 border rounded-b-lg cursor-pointer transition-colors hover:bg-gray-100">
              _
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
