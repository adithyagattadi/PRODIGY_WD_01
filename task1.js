window.addEventListener("scroll", () => {
    const menu = document.getElementById("menu");
    if (window.scrollY > 50) {
      menu.style.backgroundColor = "#333";
    } else {
      menu.style.backgroundColor = "transparent"; 
    }
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const thumbImages = document.querySelectorAll('.thumb img');
  const starbucksImage = document.querySelector('.starbucks');

  thumbImages.forEach(function (thumbImage) {
    thumbImage.addEventListener('click', function () {
      const newImageSrc = thumbImage.src;
      starbucksImage.src = newImageSrc;
    });
  });
});
