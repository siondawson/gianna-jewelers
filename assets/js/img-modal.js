document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        console.log("img-modal js");
        // Get all the images
        var images = document.querySelectorAll('.carousel-item img');
        console.log("got all imgs");
        
        // Add click event listener to each image
        images.forEach(function(image) {
            console.log("listening");
            image.addEventListener('click', function() {
                console.log("img clicked");
                var modalImage = document.getElementById('modalImage');
                modalImage.src = image.src; // Set modal image source to clicked image source
                
                var imageModal = new bootstrap.Modal(document.getElementById('imageModal')); // Create modal instance
                imageModal.show(); // Show modal
            });
        });
    }, 2000); // Wait for 2 seconds (2000 milliseconds) before executing the function
});
