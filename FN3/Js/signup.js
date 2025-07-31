// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('button');
    
    signUpButton.addEventListener('click', function () {
      // Get form input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
  
      // Basic validation
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }
  
      // // Create JSON object
      // const userData = {
      //   name: name,
      //   email: email,
      //   password: password // In production, hash it before sending
      // };
      //
      // console.log('User Data:', JSON.stringify(userData));
      //
      // // Example of sending to a server
      //
      // fetch('', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(userData)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   alert('Sign up successful!');
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      // });

    });
  });
  