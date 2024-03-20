document.addEventListener('DOMContentLoaded', function () {
    const sliderImage = document.getElementById('sliderImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
  
    let currentImageIndex = 0;
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add more image URLs as needed
  
    function updateImage() {
      sliderImage.src = images[currentImageIndex];
    }
  
    prevButton.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    nextButton.addEventListener('click', function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
    });
  })