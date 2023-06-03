$(document).ready(function() {
	(function($) {
	  "use strict";
  
	  var fullHeight = function() {
		$(".js-fullheight").css("height", $(window).height());
		$(window).resize(function() {
		  $(".js-fullheight").css("height", $(window).height());
		});
	  };
	  fullHeight();
  
	  $(".toggle-password").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
		  input.attr("type", "text");
		} else {
		  input.attr("type", "password");
		}
	  });
  
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
	  var signupForm = document.getElementById("signup-form");
	  var usernameInput = document.getElementById("username");
	  var passwordInput = document.getElementById("password-field");
  
	  // Add event listener to the form submission
	  signupForm.addEventListener("submit", function(event) {
		event.preventDefault();
  
		// Retrieve the username and password values from the form
		var username = usernameInput.value;
		var password = passwordInput.value;
  
		// Store the user's data in Firestore
		firestore
		  .collection("users")
		  .add({
			username: username,
			password: password
		  })
		  .then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
  
			// Redirect to a success page or perform any other necessary actions
			window.location.href = "login1.html";
		  })
		  .catch(function(error) {
			console.error("Error adding document: ", error);
			// Handle the error and provide appropriate feedback to the user
		  });
	  });
	})(jQuery);
  });
  