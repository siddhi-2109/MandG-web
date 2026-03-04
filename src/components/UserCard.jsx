const UserCard = ({ user }) => {
  if (!user) return null;

  const {
    firstName,
    lastName,
    photoUrl,
    age,
    gender,
    About,
    about,
  } = user;

  const bio = About || about;

  return (
    <div className="bg-gray-200/60 backdrop-blur-md border border-white/80 rounded-xl p-6 mb-8 max-w-lg mx-auto">

      {/* ROW 1: Image + Name + Bio */}
      <div className="flex items-start gap-5">
        <img
          src={photoUrl || "https://via.placeholder.com/80"}
          alt={`${firstName} ${lastName}`}
          className="w-20 h-20 object-cover rounded-lg shadow"
        />

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {firstName} {lastName}
          </h2>

          {bio && (
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              {bio}
            </p>
          )}
        </div>
      </div>

      {/* ROW 2: Details + Buttons */}
      <div className="flex justify-between items-center mt-4">
        {age && gender ? (
          <p className="text-sm font-medium text-gray-800">
            {age} • {gender}
          </p>
        ) : <span />}

        <div className="flex gap-3">
          <button className="btn btn-sm btn-primary">
            Build Connection
          </button>
          <button className="btn btn-sm btn-outline btn-error">
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
