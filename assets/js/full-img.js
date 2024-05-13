var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var closeButton = document.getElementById('close');

// Function to open full image modal
function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

// Function to close full image modal
function closeFullImg() {
    fullImgBox.style.display = "none";
}

// Event listener to close modal when clicking anywhere on the background
fullImgBox.addEventListener('click', function(event) {
    if (event.target === fullImgBox) {
        closeFullImg();
    }
});

// Event listener to close modal when clicking the close button
closeButton.addEventListener('click', closeFullImg);
