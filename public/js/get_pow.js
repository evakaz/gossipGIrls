
function showPOW(coordinates, gossip, image) {
    const new_image = document.createElement("img");
    new_image.src = image;
    new_image.className = "small-image";
    const image_cont = document.getElementById("image-cont");
    image_cont.appendChild(new_image);
    const text = document.getElementById("gossipPOW");
    text.innerHTML = gossip;
}


function loadPosts() {
    const firebaseConfig = {
        apiKey: "AIzaSyDBzUMrJWn1T4RGio8WfejI6Q3sGMQp3w4",
        authDomain: "agotracker-b03e8.firebaseapp.com",
        projectId: "agotracker-b03e8",
        storageBucket: "agotracker-b03e8.appspot.com",
        messagingSenderId: "753395929017",
        appId: "1:753395929017:web:b19629f249ef8a74973068",
        measurementId: "G-6R3NG2SZ1F"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.firestore();
    database.collection("files")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().is_pow === true) {
                    console.log("there is a pow");
                    showPOW(doc.data().coordinates, doc.data().gossip, doc.data().image)
                }
            });

        });
}
loadPosts()
