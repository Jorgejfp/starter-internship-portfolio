function updateSideMenu(activePage) {
    const sideMenu = document.getElementById('sideMenu');
    const menuItems = [
        { title: 'Education', link: 'education.html' },
        { title: 'Experience', link: 'experience.html' },
        { title: 'Portfolio', link: 'portfolio.html' },
        { title: 'Contact', link: 'contact.html' }
    ];

    // Crear un fragmento de documento para agregar los elementos sin reflow inmediato
    const fragment = document.createDocumentFragment();

    // Agregar los elementos que no son la página activa al fragmento
    menuItems.forEach(item => {
        if (item.title.toLowerCase() !== activePage.toLowerCase()) {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.title;
            link.className = 'list-group-item list-group-item-action';
            fragment.appendChild(link);
        }
    });

    // Limpiar el menú lateral y agregar todos los nuevos elementos de una sola vez
    sideMenu.innerHTML = '';
    sideMenu.appendChild(fragment);
}
