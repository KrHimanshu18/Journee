import React from "react";

function Post(props) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
      <h2 className="bg-white font-semibold font-['Montserrat'] text-black text-xl px-6 py-2 rounded-t-md">
        @{props.username}
      </h2>
      <p
        className="flex flex-col justify-center text-amber-300 font-semibold px-6 mt-2 mb-2 leading-relaxed text-center h-80"
        style={{ fontFamily: "PT Serif, serif" }}
      >
        "{props.content}"
      </p>
    </div>
  );
}

export default Post;
