/*const navLink = document.querySelectorAll('nav ui li');
navLink.forEach(link => {
    navLink.addEventListener('mouseover', () => {
        navLink.computedStyleMap.transform = 'scale(1.1)';
    });
});
*/

const filters = Array.from(document.querySelectorAll(".filter"));
const cards = Array.from(document.querySelectorAll(".card"));
const counter = document.getElementById("resultCount");
const resetButton = document.getElementById("resetFilters");

function applyFilter(tag) {
    let visible = 0;
    cards.forEach(card => {
        const tags = card.dataset.tags.split(" ");
        const match = tag === "all" || tags.includes(tag);
        card.style.display = match ? "grid" : "none";
        if (match) visible += 1;
    });
    counter.textContent = `${visible} projets affichés`;
}

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        applyFilter(button.dataset.filter);
    });
});

resetButton.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    const allButton = filters.find(item => item.dataset.filter === "all");
    if (allButton) allButton.classList.add("active");
    applyFilter("all");
});