
const sidebarToggle =  document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    sidebar.classList.toggle("-translate-x-0");
    // sidebar.classList.toggle("hidden");
});

if(sidebar.classList.contains("-translate-x-full")){
    mainContent.classList.remove("w-screen");
} else{
    mainContent.classList.add("w-screen");
 }

const menuItems = document.querySelectorAll('aside ul li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach((i) =>
            i.classList.remove('active', 'bg-gray-200', 'text-black')
        );
        item.classList.add('active', 'bg-gray-200', 'text-black')
    });
});


// ......................................Modal.............................................

const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('modal-content');
// Select all 'see-more' elements
const seeMore = document.querySelectorAll('.see-more');

seeMore.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // Get the parent <p> tag content
        const parentParagraph = item.parentElement;
        const content = parentParagraph.textContent.trim();
        modalContent.textContent = content; // Set modal content
        modal.classList.remove('hidden'); // Show modal
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden'); // Hide modal when clicking outside modal content
    }
});

