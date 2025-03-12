import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = "user@example.com"; // Static email for now
        const response = await axios.get(`/api/user/${email}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <img
              src={userData.profilePhoto}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{userData.name}</h2>
              <p className="text-gray-500">{userData.email}</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Addresses</h2>
            {userData.addresses.length > 0 ? (
              userData.addresses.map((address, index) => (
                <p key={index} className="text-gray-700 mb-1">
                  {address}
                </p>
              ))
            ) : (
              <p className="text-red-500">No address found</p>
            )}

            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Add Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
