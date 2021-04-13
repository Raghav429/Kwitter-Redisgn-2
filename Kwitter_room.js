var firebaseConfig = {
    apiKey: "AIzaSyCOQUfHWeTUuDKPcogKlZuMOROQKWyjbdo",
    authDomain: "kwitter-redisgn.firebaseapp.com",
    projectId: "kwitter-redisgn",
    storageBucket: "kwitter-redisgn.appspot.com",
    messagingSenderId: "713396860056",
    appId: "1:713396860056:web:e0821749f8198f55c40ced",
    measurementId: "G-7JZNLPZPLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
