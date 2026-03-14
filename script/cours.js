

window.addEventListener('scroll', function () {
    const scrollTop = window.pageY || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        document.querySelector('.footer').style.display = 'block';
    } else {
        document.querySelector('.footer').style.display = 'none';
    }
});
const navItems = Array.from(document.querySelectorAll(".nav-item"));
const sections = Array.from(document.querySelectorAll(".lesson"));
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const resetProgress = document.getElementById("resetProgress");
const searchInput = document.getElementById("lessonSearch");

const stored = JSON.parse(localStorage.getItem("lesson-progress") || "{}");

function updateProgressUI() {
    const completed = sections.filter(section => stored[section.id]);
    const percent = Math.round((completed.length / sections.length) * 100);
    progressText.textContent = `${percent}% complete`;
    progressBar.style.width = `${percent}%`;
    document.querySelectorAll(".mark").forEach(button => {
        const id = button.dataset.lesson;
        if (stored[id]) {
            button.classList.add("done");
            button.textContent = "Completed";
        } else {
            button.classList.remove("done");
            button.textContent = "Mark complete";
        }
    });
}

document.querySelectorAll(".mark").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.lesson;
        stored[id] = !stored[id];
        localStorage.setItem("lesson-progress", JSON.stringify(stored));
        updateProgressUI();
    });
});

resetProgress.addEventListener("click", () => {
    Object.keys(stored).forEach(key => delete stored[key]);
    localStorage.setItem("lesson-progress", JSON.stringify(stored));
    updateProgressUI();
});

document.querySelectorAll("[data-copy]").forEach(block => {
    const button = block.querySelector("button");
    const target = document.getElementById(block.dataset.copy);
    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(target.textContent);
            button.textContent = "Copied";
            setTimeout(() => (button.textContent = "Copy"), 1500);
        } catch (err) {
            button.textContent = "Use Ctrl+C";
        }
    });
});

document.querySelectorAll("[data-check]").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;
        const result = button.nextElementSibling;
        const answer = input.dataset.answer.trim().toLowerCase();
        const value = input.value.trim().toLowerCase();
        if (!value) {
            result.textContent = "Type an answer to check.";
            return;
        }
        if (value === answer) {
            result.textContent = "Correct. Nice work.";
            result.style.color = "var(--success)";
        } else {
            result.textContent = "Not quite. Try again.";
            result.style.color = "var(--danger)";
        }
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => item.classList.remove("active"));
                const active = navItems.find(item => item.getAttribute("href") === `#${entry.target.id}`);
                if (active) active.classList.add("active");
            }
        });
    },
    { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach(section => observer.observe(section));

searchInput.addEventListener("input", event => {
    const query = event.target.value.trim().toLowerCase();
    sections.forEach(section => {
        const haystack = `${section.id} ${section.dataset.tags}`.toLowerCase();
        const match = haystack.includes(query);
        section.style.display = match || !query ? "block" : "none";
    });
});

