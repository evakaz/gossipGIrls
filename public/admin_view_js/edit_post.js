// const new_image = document.getElementById("post_image");
// new_image.src = image;
// document.getElementById("userText1").innerText = gossip;
// document.getElementById("userText2").innerText = coordinates;

function editNewPost(c, g, i){
    console.log("lol");
    const new_image = document.createElement("img");
    // const new_image = document.getElementById("post_image");
    new_image.src = i;
    document.getElementById("userText1").innerText = g;
    document.getElementById("userText2").innerText = c;
}

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
// const allPosts = document.getElementById("allContent");

database.collection("post").onSnapshot((querySnapshot) => {
    // Clear existing elements in the container
    console.log("yes");
    querySnapshot.forEach((doc) => {
        editNewPost(doc.data().coordinates, doc.data().gossip, doc.data().image);
        // database.collection("post").doc(doc.id).delete()
        //     .then(() => {
        //         console.log("Document successfully deleted!");
        //     })
        //     .catch((error) => {
        //         console.error("Error deleting document: ", error);
        //     });
    });
});