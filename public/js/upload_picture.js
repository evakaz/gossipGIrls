function sendToDatabase() {
    const database = firebase.firestore();
    const gossip = document.getElementById("userText1").value;
    const coordinates = document.getElementById("userText2").value;
    const image = document.getElementById("displayedImage").src;
    console.log(gossip)
    console.log(coordinates)
    console.log(image)
    const uploadData = {
        "gossip" : gossip,
        "coordinates" : coordinates,
        "image" : image,
        "is_pow": "false"
    }

    database.collection("files").add(uploadData).then(() => {
        console.log("Uploaded.");
        location.href = "../html/down.html"
    });}

