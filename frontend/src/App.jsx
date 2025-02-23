import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [username, setUsername] = useState("Guest User");
  const [post, setPost] = useState(0);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);

  return (
    <div>
      <LoginContext.Provider
        value={
          ({ username, setUsername },
          { post, setPost },
          { follower, setFollower },
          { following, setFollowing })
        }
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
