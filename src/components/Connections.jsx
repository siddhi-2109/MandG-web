import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await axios.get(BASE_URL + "/user/connections", {
          withCredentials: true,
        });
        dispatch(addConnections(res.data.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchConnections();
  }, [dispatch]);

  if (!connections)
    return <h1 className="text-center mt-10 text-white">Loading...</h1>;

  if (connections.length === 0)
    return (
      <h1 className="text-center mt-10 text-white">
        No connections found
      </h1>
    );

  return (
    <div className="my-10">
      {/* Heading */}
      <h1 className="font-bold text-2xl text-center mb-6 text-white">
        Connections
      </h1>

      {/* Connections list */}
      <div className="flex flex-col items-center gap-4">
        {connections.map(
          ({ _id, firstName, lastName, photoUrl, age, gender, about }, index) => (
            <div
              key={_id || index}
              className="w-72 p-4 border rounded-md text-center
                         bg-white text-black shadow-sm
                         hover:bg-gray-100 transition"
            >
              <img
                src={photoUrl}
                alt={firstName}
                className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
              />

              <h2 className="font-semibold text-lg">
                {firstName} {lastName}
              </h2>

              <p className="text-sm text-gray-600">
                {age} • {gender}
              </p>

              <p className="text-sm mt-2 text-gray-700">
                {about}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Connections;