// admin-script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Sidebar Navigation Logic
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    const sections = document.querySelectorAll('.dashboard-section');
    const pageTitle = document.getElementById('page-title');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all menu items and sections
            menuItems.forEach(m => m.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked item and target section
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Update Page Title
            pageTitle.textContent = item.textContent.trim();
        });
    });

    // Mail Form Submit Intercept
    const mailForm = document.getElementById('mail-form');
    if(mailForm) {
        mailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Mail sent to students successfully!');
            mailForm.reset();
        });
    }

    // Mobile Sidebar Toggle Logic
    const adminMenuToggle = document.getElementById('admin-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (adminMenuToggle && sidebar && sidebarOverlay) {
        function toggleAdminSidebar() {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        }

        adminMenuToggle.addEventListener('click', toggleAdminSidebar);
        sidebarOverlay.addEventListener('click', toggleAdminSidebar);

        // Close sidebar when clicking a menu item on mobile
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                }
            });
        });
    }
});

// Global Toast Function
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    
    toastMsg.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
