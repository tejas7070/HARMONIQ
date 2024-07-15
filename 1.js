{
  firebase.initializeApp(firebaseConfig);
}
// register.js

// Get form elements
const registerForm = document.getElementById('registerForm');
const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Handle form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Basic validation
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Create user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Save user info to Firestore
      return firebase.firestore().collection('users').doc(user.uid).set({
        firstname,
        lastname,
        email
      });
    })
    .then(() => {
      alert('User registered successfully and data saved to Firestore');
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error('Error registering user', error);
      alert('Error registering user: ' + error.message);
    });
});
