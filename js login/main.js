$(document).ready(function() {
	// Firebase configuration
	var firebaseConfig = {
	  apiKey: "AIzaSyDaZoKIyJdHltudOtqL-nHwJznLwxDxgjY",
	  authDomain: "mpes-database.firebaseapp.com",
	  databaseURL: "https://mpes-database-default-rtdb.europe-west1.firebasedatabase.app",
	  projectId: "mpes-database",
	  storageBucket: "mpes-database.appspot.com",
	  messagingSenderId: "969357183449",
	  appId: "1:969357183449:web:21010954f7f1b3237131c8",
	  measurementId: "G-S7GBL413RN"
	};
  
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	var firestore = firebase.firestore();
  
	// Get form elements
	var loginForm = document.getElementById("login-form");
	var usernameInput = document.getElementById("username");
	var passwordInput = document.getElementById("password-field");
  
	// Add event listener to the form submission
	loginForm.addEventListener("submit", function(event) {
	  event.preventDefault();
  
	  // Retrieve the username and password values from the form
	  var username = usernameInput.value;
	  var password = passwordInput.value;
  
	  // Check if the entered username and password match the stored data in Firestore
	  firestore
		.collection("users")
		.where("username", "==", username)
		.where("password", "==", password)
		.get()
		.then(function(querySnapshot) {
		  if (!querySnapshot.empty) {
			// Redirect to the main page
			window.location.href = "main page.html";
		  } else {
			// Handle incorrect username or password
			console.log("Incorrect username or password");
		  }
		})
		.catch(function(error) {
		  console.error("Error retrieving user data: ", error);
		});
	});
  });
  