document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent the default form submission behavior
  
	// Fetch form data
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
  
	// You can perform additional validation or send the form data to a server here
	// For this example, we'll just log the form data to the console
	console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
	// Optionally, you can display a success message to the user or clear the form fields
  });
  