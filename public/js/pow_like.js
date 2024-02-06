let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;

function incrementLikeCount() {
    likeCount++;
    updateLikeCount();
    saveLikeCount();
}

function updateLikeCount() {
    const likeCountElement = document.getElementById("like-count");
    likeCountElement.textContent = likeCount;
}

function saveLikeCount() {
    localStorage.setItem("likeCount", likeCount.toString());
}

// Initialize the like count when the page loads
updateLikeCount();


function shakeLikeButton() {
    const likeButton = document.querySelector('.like-button');
    likeButton.classList.add('shake');

    likeButton.addEventListener('animationend', () => {
        likeButton.classList.remove('shake');
    });
}


