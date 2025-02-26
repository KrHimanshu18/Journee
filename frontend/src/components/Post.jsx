import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Post(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-xl shadow-md">
      <div className="bg-white rounded-t-md flex justify-between">
        <h2 className="text-left font-semibold font-['Montserrat'] text-black text-xl px-6 py-2">
          @{props.username}
        </h2>
        <div className="relative">
          <button
            onClick={handleMenuClick}
            className="cursor-pointer text-right font-semibold font-['Montserrat'] text-black text-xl px-6 py-2"
          >
            <Menu size={24} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="cursor-pointer w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
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
