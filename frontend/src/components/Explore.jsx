import {
  React,
  useContext,
  useState,
  useEffect,
  useCallback,
  memo,
} from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ExpPost from "./ExpPost";
import { Menu, X } from "lucide-react";
import axios from "axios";

function Explore() {
  const navigate = useNavigate();
  const { username, post, setPost, isOpen, setIsOpen } =
    useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  const [localPosts, setLocalPosts] = useState(post); // Added local state
  const url = "https://6905571a-backend.krhimanshu0208.workers.dev";

  // Fetch posts when username changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postRes = await axios.get(`${url}/getFeed`, {
          params: {
            username: username,
          },
        });
        setPost(postRes.data.posts);
        setLocalPosts(postRes.data.posts);
        console.log(postRes.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (username && username !== "Guest User") {
      fetchData();
    } else {
      setLoading(false);
      setLocalPosts([]);
    }
  }, [username, setPost]); // Removed 'post' from dependencies

  // Sync local state with context when post changes
  useEffect(() => {
    setLocalPosts(post);
  }, [post]);

  const handleNavigate = useCallback(
    (path) => {
      navigate(path, { replace: true });
      setIsOpen(false);
    },
    [navigate, setIsOpen]
  );

  return (
    <div
      className="bg-[#12202e] min-h-screen w-full"
      style={{
        backgroundImage: "url('src/components/assets/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "soft-light",
      }}
    >
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-4 bg-[#212529] shadow-md text-white fixed w-full top-0 z-10">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 215, 0, 1)" }}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px]"
          >
            <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path>
          </svg>
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "'Jacques Francois Shadow', cursive",
              color: "rgba(255, 215, 0, 1)",
            }}
          >
            JOURNEE
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block sm:hidden p-2 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`z-10 sm:flex items-center sm:gap-2 md:gap-4 lg:gap-6 ${
            isOpen
              ? "absolute top-full left-0 w-full bg-[#212529] flex flex-col gap-2 shadow-md p-4 rounded-b-md"
              : "hidden"
          } sm:flex`}
        >
          <a
            className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => handleNavigate("/")}
          >
            Home
          </a>
          <a
            className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => handleNavigate("/explore")}
          >
            Explore
          </a>
          <a
            className="text-base sm:text-lg md:text-xl font-bold cursor-pointer font-['Montserrat'] transition-colors duration-300 hover:text-[rgba(255,215,0,1)]"
            onClick={() => handleNavigate("/profile")}
          >
            Profile
          </a>
        </div>
      </header>

      <section className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 pt-[60px] sm:pt-[80px] md:pt-[80px] lg:pt-[80px]">
        {loading ? (
          <p className="text-center text-white font-bold h-screen">
            Loading posts...
          </p>
        ) : localPosts.length > 0 ? (
          localPosts.map((item, index) => (
            <ExpPost key={item.id || index} post={item} /> // Use item.id if available
          ))
        ) : (
          <p className="text-center text-white font-bold h-screen">
            No posts available
          </p>
        )}
      </section>
    </div>
  );
}

export default memo(Explore);
