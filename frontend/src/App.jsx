import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";

const Home = lazy(() => import("./components/Home"));
const Explore = lazy(() => import("./components/Explore"));
const Profile = lazy(() => import("./components/Profile"));
const Login = lazy(() => import("./components/Login"));

function App() {
  const [username, setUsername] = useState("Guest User");
  const [profilePost, setProfilePost] = useState([]);
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      by: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      by: "Winston Churchill",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      by: "Albert Einstein",
    },
    {
      quote: "The best way to predict the future is to create it.",
      by: "Abraham Lincoln",
    },
    {
      quote: "Life isn't about finding yourself. It's about creating yourself.",
      by: "George Bernard Shaw",
    },
    {
      quote:
        "Happiness is not something ready-made. It comes from your own actions.",
      by: "Dalai Lama",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      by: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      by: "Ralph Waldo Emerson",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      by: "Confucius",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      by: "Wayne Gretzky",
    },
    {
      quote: "Be the change that you wish to see in the world.",
      by: "Mahatma Gandhi",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success.",
      by: "Albert Schweitzer",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      by: "Eleanor Roosevelt",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      by: "Charles Kingsleigh",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      by: "Ralph Waldo Emerson",
    },
  ];
  const [post, setPost] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <LoginContext.Provider
        value={{
          username,
          setUsername,
          follower,
          setFollower,
          following,
          setFollowing,
          post,
          setPost,
          isOpen,
          setIsOpen,
          password,
          setPassword,
          isSignUp,
          setIsSignUp,
          email,
          setEmail,
          quotes,
          profilePost,
          setProfilePost,
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/explore"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Explore />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

// WEBSITE
// https://10web-site.ai/357/accurate-katydid/
