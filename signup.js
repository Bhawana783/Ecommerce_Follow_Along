document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate name
    if (name === '') {
      alert('Name is required!');
      return;
    }
  
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }
  
    // If all validations pass
    alert('Form submitted successfully!');
    // Here you would typically submit the data to the backend
  });
  