const handleSubmit = async (e) => {
  e.preventDefault();

  const email = "user@example.com"; // Replace with logged-in user's email
  const addressData = { country, city, address1, address2, zip, type };

  try {
    const response = await fetch("http://localhost:5000/api/users/add-address", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, address: addressData }),
    });

    const data = await response.json();
    console.log(data.message);

    if (response.ok) alert("Address added successfully!");
    else alert("Failed to add address");
  } catch (error) {
    console.error("Error:", error);
  }
};
