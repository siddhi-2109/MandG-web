import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch {
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-300">

        {/* Header */}
        <div className="flex flex-col items-center bg-gray-50 p-6 border-b">
          <img
            src={user.photoUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-3 object-cover"
          />

          <h2 className="text-xl font-bold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-700 font-medium">
            {user.role || "Member"}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-gray-900">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Email</span>
            <span className="text-gray-900">{user.email}</span>
          </div>

          <div>
            <p className="font-semibold text-gray-700">Bio</p>
            <p className="italic text-gray-900">
              {user.About || "No bio added"}
            </p>
          </div>

          <button
            onClick={() => navigate("/profile/edit")}
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-6"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
