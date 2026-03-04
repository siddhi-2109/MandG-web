import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/profile/view`, {
          withCredentials: true,
        });
        setUser(res.data);
      } catch {
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          About: user.About,
          photoUrl: user.photoUrl,
        },
        { withCredentials: true }
      );

      // ✅ show popup
      setShowPopup(true);

      // ✅ auto close + navigate
      setTimeout(() => {
        setShowPopup(false);
        navigate("/profile");
      }, 2000);

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center py-12">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border p-6 space-y-4">

          {/* Profile Photo */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={user.photoUrl || "https://via.placeholder.com/120"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border shadow"
            />

            <input
              className="input input-bordered w-full"
              name="photoUrl"
              value={user.photoUrl || ""}
              onChange={handleChange}
              placeholder="Profile Photo URL"
            />
          </div>

          <input
            className="input input-bordered w-full"
            name="firstName"
            value={user.firstName || ""}
            onChange={handleChange}
            placeholder="First Name"
          />

          <input
            className="input input-bordered w-full"
            name="lastName"
            value={user.lastName || ""}
            onChange={handleChange}
            placeholder="Last Name"
          />

          <input
            className="input input-bordered w-full bg-gray-100"
            value={user.email}
            disabled
          />

          <textarea
            className="textarea textarea-bordered w-full"
            name="About"
            value={user.About || ""}
            onChange={handleChange}
            placeholder="Bio"
          />

          <button
            onClick={handleSave}
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg px-8 py-6 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              ✅ Changes saved successfully
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Redirecting to profile...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
