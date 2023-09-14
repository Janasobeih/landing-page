// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// Begin Main Functions

// Build the navigation menu
function buildNav() {
    sections.forEach((section) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(listItem);
    });
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with an offset to align it with the top of the viewport
    targetSection.scrollIntoView({ behavior: "smooth", block: "end" });

    // Remove 'your-active-class' from all sections
    sections.forEach((section) => {
        section.classList.remove("your-active-class");
    });

    // Add 'your-active-class' to the target section
    targetSection.classList.add("your-active-class");
}

// End Main Functions

// Begin Events

// Build menu
buildNav();

// Scroll to section on link click
navList.addEventListener("click", scrollToSection);
// Set sections as active on scroll
document.addEventListener("scroll", setActiveSection);

// End Events
