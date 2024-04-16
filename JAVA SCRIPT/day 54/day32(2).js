document.addEventListener('DOMContentLoaded', function () {
    const resizableImage = document.getElementById('resizableImage');
  
    let isExpanded = false;
  
    resizableImage.addEventListener('click', function () {
      if (isExpanded) {
        resizableImage.style.width = '800px';
      } else {
        resizableImage.style.width = '300px';
      }
      isExpanded = !isExpanded;
    });
  });