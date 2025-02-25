import React from "react";

function Post(props) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
      <h2
        className="bg-white font-semibold text-black text-xl px-6 py-2 rounded-t-md"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        @{props.username}
      </h2>
      <p
        className="flex flex-col justify-center text-amber-300 font-semibold text-xl px-6 mt-2 leading-relaxed text-center h-80"
        style={{ fontFamily: "PT Serif, serif" }}
      >
        "{props.content}"
      </p>
      <div className="bg-white text-center text-gray-600 font-medium mt-3 py-2 px-3 border rounded-b-lg cursor-pointer transition-colors hover:bg-gray-100">
        _
      </div>
    </div>
  );
}

export default Post;
