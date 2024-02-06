function editPost(image, gossip, coord) {
    console.log("lol");
    const new_image = document.getElementById("post_image");
    new_image.src = image;
}

function postsListing(coordinates, gossip, image, cur_is_pow, docId) {
    const new_image = document.createElement("img");
    new_image.src = image;
    new_image.className = "image-cont"
    const box = document.createElement("div");
    box.className = "box";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";
    const POW = document.createElement("button");
    POW.textContent = "Make POW";
    POW.className = "pow_button";
    box.appendChild(POW);
    box.appendChild(editButton);
    box.appendChild(new_image);
    const Delete = document.createElement("button");
    Delete.textContent = "Delete";
    Delete.className = "delete";
    box.appendChild(Delete);
    const allPosts = document.getElementById("allContent");
    allPosts.appendChild(box);
    POW.addEventListener("click", function () {
        //make pow
        if (cur_is_pow === false) {
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
            const query = database.collection("files").where("gossip", "==", gossip);

            query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // Update only the specific document
                    console.log("there is an update");
                    doc.ref.update({
                        is_pow: true,
                    });
                });
            });
            const anti_query = database.collection("files").where("gossip", "!=", gossip);

            anti_query.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // Update only the specific document
                    console.log("not pow");
                    doc.ref.update({
                        is_pow: false,
                    });
                });
            });

            cur_is_pow = true;
        }

    });
    editButton.addEventListener("click", function () {
        //edit
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
        const newData = {
            "gossip" : gossip,
            "coordinates" : coordinates,
            "image" : image
        }
        database.collection("post").add(newData).then(() => {
            console.log("Uploaded.");
        });
        window.location.href = "../admin_view_html/edit_post.html";

    });
    Delete.addEventListener("click", function () {
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

        // Delete the document based on the provided document ID (docId)
        database.collection("files").doc(docId).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
    });
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
    const allPosts = document.getElementById("allContent");

    database.collection("files").onSnapshot((querySnapshot) => {
        // Clear existing elements in the container
        allPosts.innerHTML = "";

        querySnapshot.forEach((doc) => {
            postsListing(doc.data().coordinates, doc.data().gossip, doc.data().image, doc.data().is_pow, doc.id);
        });
    });
}
loadPosts();

