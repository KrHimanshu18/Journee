import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [username, setUsername] = useState("Guest User");
  const [postCount, setPostCount] = useState("0");
  const [follower, setFollower] = useState("0");
  const [following, setFollowing] = useState("0");
  const [post, setPost] = useState([
    {
      content:
        "Success and failure are both temporary. What truly matters is perseverance. Many great people have faced failures before achieving greatness. Thomas Edison failed thousands of times before inventing the light bulb, yet he never gave up. Every setback teaches valuable lessons, making you stronger and wiser. If you’ve failed, don’t be discouraged—learn, adapt, and keep moving forward. True success comes to those who refuse to quit. Keep going, because every step forward brings you closer to your goal.",
    },
    {
      content:
        "Waiting for the perfect time or resources often leads to inaction. Instead of focusing on what you lack, use what you have to make progress. Many successful entrepreneurs started with minimal resources but used their skills and determination to create something great. Progress is built on small, consistent actions. No matter your situation, take action today. Even the smallest step can create a ripple effect, leading you toward success. Start where you are, with what you have, and make the best of it.",
    },
    {
      content:
        "Many people spend their lives trying to meet others' expectations, neglecting their own dreams. True fulfillment comes from following your passion, not from living according to someone else’s script. Don’t be afraid to take risks or explore new opportunities. Regret comes from inaction, not failure. Focus on what excites you and brings you joy. Life is short—make sure you’re spending it doing what truly matters to you. Stay true to yourself and live life on your own terms.",
    },
    {
      content:
        "Self-belief is the foundation of success. If you don’t believe in yourself, it’s difficult to convince others to believe in you. Confidence fuels action, and action leads to results. Many successful people started with doubts but pushed forward because they believed in their vision. Challenges will arise, but a strong belief in your abilities will help you overcome obstacles. No dream is too big if you have the courage to chase it. Trust yourself, take the leap, and success will follow.",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <LoginContext.Provider
        value={{
          username,
          setUsername,
          postCount,
          setPostCount,
          follower,
          setFollower,
          following,
          setFollowing,
          post,
          setPost,
          isOpen,
          setIsOpen,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;

// WEBSITE
// https://10web-site.ai/357/accurate-katydid/
