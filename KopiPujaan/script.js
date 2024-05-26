function changeImage(imagePath, titleText, element) {
    const mainImage = document.getElementById('mainImage');
    const mainTitle = document.getElementById('mainTitle');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const elementIndex = Array.from(thumbnails).indexOf(element);

    // Remove selected class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('selected'));

    // Add selected class to the clicked thumbnail
    element.classList.add('selected');

    mainImage.style.opacity = 0;
    mainTitle.style.opacity = 0;

    setTimeout(() => {
        mainImage.src = imagePath;
        mainTitle.textContent = titleText;
        mainImage.style.opacity = 1;
        mainTitle.style.opacity = 1;
    }, 500);

    // Center the selected thumbnail in the container
    const offset = element.offsetTop - thumbnailsContainer.offsetTop - (thumbnailsContainer.clientHeight / 2) + (element.clientHeight / 2);
    thumbnailsContainer.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
}
