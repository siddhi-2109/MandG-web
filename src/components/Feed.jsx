import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed.data); // { data: [...] }

  const getfeed = async () => {
    if (feed?.data?.length > 0) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data)); // { data: users }
    } catch (err) {
      console.log("Feed Error:", err.message);
    }
  };

  useEffect(() => {
    getfeed();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary">+ Post New Project</button>
      </div>

      {/* ✅ USERS FROM DATABASE */}
      <div className="space-y-6">
        {feed?.data?.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
