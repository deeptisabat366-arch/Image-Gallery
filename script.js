
// Image Gallery Data
const images = [
    {
        title: "Animal 1",
        category: "Animal",
        src: "images/animal1.jpg"
    },
    {
        title: "Animal 2",
        category: "Animal",
        src: "images/animal2.jpg"
    },
    {
        title: "Bird 1",
        category: "Bird",
        src: "images/bird1.jpg"
    },
    {
        title: "Bird 2",
        category: "Bird",
        src: "images/bird2.jpg"
    },
    {
        title: "Butterfly 1",
        category: "Butterfly",
        src: "images/butterfly.jpg"
    },
    {
        title: "Butterfly 2",
        category: "Butterfly",
        src: "images/butterfly1.jpg"
    },
    {
        title: "Flower 1",
        category: "Flower",
        src: "images/flower1.jpg"
    },
    {
        title: "Flower 2",
        category: "Flower",
        src: "images/flower2.jpg"
    },
    {
        title: "Flower 3",
        category: "Flower",
        src: "images/flower3.jpg"
    },
    {
        title: "Nature 1",
        category: "Nature",
        src: "images/nature1.jpg"
    },
    {
        title: "Nature 2",
        category: "Nature",
        src: "images/nature2.jpg"
    },
    {
        title: "Nature 3",
        category: "Nature",
        src: "images/nature3.jpg"
    },
    {
        title: "Travel 1",
        category: "Travel",
        src: "images/travel1.jpg"
    },
    {
        title: "Travel 2",
        category: "Travel",
        src: "images/travel2.jpg"
    },
    {
        title: "Travel 3",
        category: "Travel",
        src: "images/travel3.jpg"
    }
];

// Select gallery
const gallery = document.getElementById("gallery");

// Display images
function displayImages(imageList) {

    gallery.innerHTML = "";

    imageList.forEach((image) => {

        const item = document.createElement("div");

        item.className = "gallery-item";

        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <p>${image.title}</p>
        `;

        item.addEventListener("click", () => {

    currentImages = imageList;
    currentIndex = imageList.indexOf(image);

    openLightbox();

});


        gallery.appendChild(item);

    });
}

// Show all images initially
displayImages(images);


// Category Filter Functionality

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const category = button.dataset.category;

        // Filter images
        if (category === "All") {
            displayImages(images);
        } else {
            const filteredImages = images.filter(image => {
                return image.category === category;
            });

            displayImages(filteredImages);
        }

    });

});


// Lightbox functionality

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const imageTitle = document.getElementById("image-title");

let currentImages = images;
let currentIndex = 0;

// Open selected image
function openLightbox() {

    const image = currentImages[currentIndex];

    lightboxImg.src = image.src;
    lightboxImg.alt = image.title;
    imageTitle.textContent = image.title;

    lightbox.classList.add("show");
}

// Next image
document.getElementById("next").addEventListener("click", () => {

    currentIndex =
        (currentIndex + 1) % currentImages.length;

    openLightbox();

});

// Previous image
document.getElementById("prev").addEventListener("click", () => {

    currentIndex =
        (currentIndex - 1 + currentImages.length)
        % currentImages.length;

    openLightbox();

});

// Close image
document.getElementById("close").addEventListener("click", () => {

    lightbox.classList.remove("show");

});

// Close when clicking outside image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }

});

// Keyboard controls
document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) return;

    if (event.key === "ArrowRight") {
        document.getElementById("next").click();
    }

    if (event.key === "ArrowLeft") {
        document.getElementById("prev").click();
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }

});



