document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const currentPath = window.location.href;

  links.forEach((link) => {
    if (link.href === currentPath) {
      link.classList.add("active");
    }
  });
});

function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("show");
  icon.classList.toggle("active");
}

const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const skillsContainer = document.querySelector(".skills");

// Add click event to scroll right
scrollRight.addEventListener("click", () => {
  skillsContainer.scrollBy({
    left: 300, // Amount to scroll to the right
    behavior: "smooth", // Smooth scrolling effect
  });
});

// Add click event to scroll left
scrollLeft.addEventListener("click", () => {
  skillsContainer.scrollBy({
    left: -300, // Amount to scroll to the left
    behavior: "smooth", // Smooth scrolling effect
  });
});

const leftArrow = document.getElementById("scroll-left");
const rightArrow = document.getElementById("scroll-right");
const gallery = document.querySelector(".gallery");

leftArrow.addEventListener("click", () => {
  gallery.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  gallery.scrollBy({ left: 300, behavior: "smooth" });
});
