import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="navbar bg-white shadow-md border-b border-gray-200 px-6">
      {/* LEFT SECTION (logo) */}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold text-gray-900"
        >
          <img
            src="https://pikaso.cdnpk.net/private/production/3297277935/conversions/upload-preview.png?token=exp=1771113600~hmac=5632013feb7cbf81dfc982d60ed8e19ac7e663322e0ef7a5b811c859a47f94d3"
            alt="M&G Logo"
            className="inline-block h-10 w-10 mr-2 align-middle"
          />
          M&G
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-none">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-3"
            >
              <p className="text-gray-800 font-medium">
                Welcome, {user.firstName}
              </p>

              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-gray-100 p-1">
                  <img src={user.photoUrl} alt="User Photo" />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm bg-white text-gray-900 rounded-box mt-3 w-52 p-2 shadow-lg border border-gray-200 z-50"
            >
              <li>
                <Link
                  to="/profile"
                  className="text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link to= "/connections"className="text-gray-800 hover:bg-gray-100 rounded-md">
                  Connections
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 rounded-md"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
