function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('collapsed');
}

if(window.screen.width < 800)
    toggleSidebar();