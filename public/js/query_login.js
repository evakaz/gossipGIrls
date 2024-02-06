const firebaseConfig = {
    apiKey: "AIzaSyDBzUMrJWn1T4RGio8WfejI6Q3sGMQp3w4",
    authDomain: "agotracker-b03e8.firebaseapp.com",
    projectId: "agotracker-b03e8",
    storageBucket: "agotracker-b03e8.appspot.com",
    messagingSenderId: "753395929017",
    appId: "1:753395929017:web:b19629f249ef8a74973068",
    measurementId: "G-6R3NG2SZ1F"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();


function myLogin() {


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("here!");
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("ago");
            // loads a page
            location.href = "../admin_view_html/pending_post.html" // hiljem lisada,  et läheks hoopis admin lehele
        })
        .catch((error) => {
            const errorMessage = document.getElementById("error")
            errorMessage.innerHTML = "Your username or password is incorrect!"
            errorMessage.style.animation="shake 0.7s, glow-red 0.7s";
            console.log("error")
        });
}