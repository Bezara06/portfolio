const header = document.querySelector('header.site-header');
const parent = header.parentElement;

// 1. Remove overflow: hidden from the parent to allow sticky to work
await setElementStyles(parent, {
    'overflow': 'visible'
});

// 2. Ensure the header has the correct sticky properties (already seems to have them, but reinforcing)
await setElementStyles(header, {
    'position': 'sticky',
    'top': '0',
    'z-index': '1000' // Increasing z-index to ensure it stays on top of other content
});

const data = {
    parentOverflow: window.getComputedStyle(parent).overflow,
    headerPosition: window.getComputedStyle(header).position,
    headerTop: window.getComputedStyle(header).top
};