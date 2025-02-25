import React from "react";

function Post(props) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
      <h2 className="bg-white font-semibold font-['Montserrat'] text-black text-xl px-6 py-2 rounded-t-md">
        @{props.username}
      </h2>
      <p
        className="flex flex-col justify-center text-amber-300 font-semibold text-xl px-6 mt-2 leading-relaxed text-center h-80"
        style={{ fontFamily: "PT Serif, serif" }}
      >
        "{props.content}"
      </p>
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
          <p className="text-xl font-bold text-black font-['Montserrat']">
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
          <p className="text-xl font-bold text-black font-['Montserrat']">
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
          <p className="text-xl font-bold text-black font-['Montserrat']">
            Share
          </p>
        </a>
      </div>
    </div>
  );
}

export default Post;
