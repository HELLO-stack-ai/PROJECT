//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDSt7s_rOmR68t9QPE8j-EpWuYLAci3BIs",
    authDomain: "lets-chat-app-2cb0e.firebaseapp.com",
    databaseURL: "https://lets-chat-app-2cb0e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-2cb0e",
    storageBucket: "lets-chat-app-2cb0e.appspot.com",
    messagingSenderId: "558417531831",
    appId: "1:558417531831:web:00439cb7803c68a9898e32",
    measurementId: "G-BWEHPMJD3Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
  };

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];


//End code
   } });  }); }
getData();


   
  function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
};


  