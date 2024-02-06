
function postsListing(coordinates, gossip, image) {
    const onePost = document.createElement("div");
    onePost.className = "postContainer";
    const new_image = document.createElement("img");
    new_image.src = image;
    new_image.className = "feedImg"
    onePost.appendChild(new_image);
    const button = document.createElement("button");
    button.className = "imageBtn";
    button.textContent = "Read post";
    onePost.appendChild(button);
    const allPics = document.getElementById("myContainer");
    allPics.appendChild(onePost);
    button.addEventListener("click", function (){
        const existingOverlays = document.querySelectorAll(".big_box");
        existingOverlays.forEach((overlay) => overlay.remove());
        //create overlay
        const image_for_post = document.createElement("img");
        image_for_post.src = image;
        image_for_post.className = "image-cont";
        const item1 = document.createElement("div");
        item1.appendChild(image_for_post);
        item1.className = "item1";
        const newGossip = document.createElement("p");
        newGossip.innerHTML = gossip;
        newGossip.className = "small-box";
        const item2 = document.createElement("div");
        item2.className = 'item2';
        item2.appendChild(newGossip);
        const item3 = document.createElement("div");
        item3.className = 'item3';
        const new_coordinates= document.createElement("p");
        new_coordinates.innerHTML = coordinates;
        new_coordinates.className = "smaller-box";
        item3.appendChild(new_coordinates);
        const grid_container = document.createElement('div');
        grid_container.className = "grid-container";
        grid_container.appendChild(item1);
        grid_container.appendChild(item2);
        grid_container.appendChild(item3);
        const box_align = document.createElement('div');
        box_align.className = "box_align";
        box_align.appendChild(grid_container);
        const big_box = document.createElement('div');
        big_box.className = "big_box";
        big_box.appendChild(box_align);
        const cancelForm = document.createElement('form');
        const cancelButton = document.createElement('button');
        cancelButton.className = 'button cancel';
        cancelButton.textContent = 'x';
        cancelButton.setAttribute('formaction', 'feed.html');
        cancelForm.appendChild(cancelButton);
        big_box.appendChild(cancelForm);
        const post = document.getElementById("postOverlay");
        post.appendChild(big_box);
        //create overlay end
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
    database.collection("files")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                postsListing(doc.data().coordinates, doc.data().gossip, doc.data().image)
            });

        });
}
loadPosts()
