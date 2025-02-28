import React, { useState, useContext } from "react";
import { Menu } from "lucide-react";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";

function Post(props) {
  const url = "http://127.0.0.1:8787";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username } = useContext(LoginContext);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const deletePost = async () => {
    try {
      if (!username) {
        throw new Error("You must be logged in to delete a post");
      }

      const response = await axios.delete(
        `${url}/deletePost/${props.post.id}`,
        {
          data: {
            username: props.post.authorId, // Send username in request body
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.message); // "Post deleted successfully"
      // Optionally, notify parent component or update UI
      // For example, you could pass a callback via props to remove the post from the list
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to delete post";
      console.error("Error deleting post:", errorMessage);
      alert(errorMessage); // Show error to user
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-t-md flex justify-between items-center">
        <h2 className="text-left font-semibold font-['Montserrat'] text-black text-lg sm:text-xl px-4 py-2 sm:px-6">
          @{props.post.authorId}
        </h2>
        <div className="relative">
          <button
            onClick={handleMenuClick}
            className="cursor-pointer text-right font-semibold font-['Montserrat'] text-black text-lg sm:text-xl px-4 py-2 sm:px-6"
          >
            <Menu size={24} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  deletePost();
                }}
                className="cursor-pointer w-full text-left px-3 py-2 sm:px-4 sm:py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
      <p
        className="flex flex-col justify-center text-amber-300 font-semibold px-4 sm:px-6 mt-2 mb-2 leading-relaxed text-center min-h-[15rem] sm:min-h-[20rem] text-sm sm:text-base md:text-base overflow-wrap break-words"
        style={{ fontFamily: "PT Serif, serif" }}
      >
        "{props.post.content}"
      </p>
    </div>
  );
}

export default Post;
