
const firebaseConfig = {
    apiKey: "AIzaSyD02-4-k3VDRKLFLE0wmCPTjUCu77l-Hl0",
    authDomain: "kwitter-33fa2.firebaseapp.com",
    databaseURL: "https://kwitter-33fa2-default-rtdb.firebaseio.com",
    projectId: "kwitter-33fa2",
    storageBucket: "kwitter-33fa2.appspot.com",
    messagingSenderId: "984186999591",
    appId: "1:984186999591:web:c0c9302bfe2c72e48b0f02"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser ()
  {
    user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
        });
  }