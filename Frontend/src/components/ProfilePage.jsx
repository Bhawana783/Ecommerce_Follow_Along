import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => navigate("/add-address")} className="bg-green-500 text-white px-4 py-2 rounded">
        Add Address
      </button>
    </div>
  );
};

export default ProfilePage;
