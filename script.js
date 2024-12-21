// Initialize Lucide icons
lucide.createIcons();

// Handle dropdowns
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('.notification-icon, .user-profile');
    
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('show');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.dropdown-content').forEach(content => {
    content.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Handle menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('active');
        });
        // Add active class to clicked item
        item.classList.add('active');
    });
});