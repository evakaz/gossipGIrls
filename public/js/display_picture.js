// Display the picture of Ago that was uploaded
function displayImage(input) {
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

    const ref = firebase.storage().ref()
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const whereImageIsPut = document.getElementById("displayedImage");
            whereImageIsPut.src = e.target.result;
            removeButton.style.display = 'block';
        };
        reader.readAsDataURL(file);
        const name = new Date() + "-" + file.name;
        const metadata = {
            contentType: file.type
        }
        const task = ref.child(name).put(file, metadata);
        task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url)
                document.getElementById('displayedImage').src = url;
            })
    }
}