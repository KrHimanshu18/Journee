import React from "react";

function ExpPost(props) {
  const url = "http://127.0.0.1:8787";

  return (
    <div className="h-[100vh] sm:h-[90vh] md:h-[80vh] lg:h-[90vh] mt-10 sm:mt-16 md:mt-20 w-full">
      <div className="flex flex-col justify-between text-center border-2 border-white rounded-2xl m-2 sm:m-3 md:m-4 bg-gray-900 shadow-lg h-[85%] sm:h-[80%] md:h-[75%] lg:h-[80%] w-full box-border">
        <div className="flex justify-between items-center mb-2 sm:mb-3 bg-white rounded-t-2xl px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2">
          <p className="text-lg sm:text-xl md:text-2xl text-black font-['Montserrat'] font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            @{props.username}
          </p>
          <button className="cursor-pointer bg-[#12202e] font-['Montserrat'] font-bold text-[#d9d9d9] text-base sm:text-lg md:text-xl px-2 py-1 sm:px-3 sm:py-1 rounded-lg hover:bg-amber-400 hover:text-[#12202e] transition duration-300">
            Follow
          </button>
        </div>

        <div className="flex justify-center items-center flex-grow px-2 sm:px-3 md:px-4">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#d9d9d9] leading-relaxed font-bold overflow-wrap break-word"
            style={{ fontFamily: "PT Serif, serif" }}
          >
            {props.content}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2 sm:mt-3 md:mt-4 bg-white rounded-b-2xl px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2">
          <a
            href="#"
            className="flex items-center gap-1 sm:gap-2 hover:scale-105 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-[#12202e] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
            </svg>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black font-['Montserrat']">
              Like
            </p>
          </a>

          <a
            href="#"
            className="flex items-center gap-1 sm:gap-2 hover:scale-105 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-[#12202e] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
            </svg>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black font-['Montserrat']">
              Comment
            </p>
          </a>

          <a
            href="#"
            className="flex items-center gap-1 sm:gap-2 hover:scale-105 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-[#12202e] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"></path>
            </svg>
            <p className="text-base sm:text-lg md:text-xl font-bold text-black font-['Montserrat']">
              Share
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExpPost;
