// Función para actualizar el menú lateral dependiendo de la página activa
function updateSideMenu(activePage) {
    const sideMenu = document.getElementById('sideMenu');
    const menuItems = [
        { title: 'Education', link: 'education.html' },
        { title: 'Experience', link: 'experience.html' },
        { title: 'Portfolio', link: 'portfolio.html' },
        { title: 'Contact', link: 'contact.html' }
    ];

    // Limpiamos el menú lateral
    sideMenu.innerHTML = '';

    // Agregamos los elementos que no son la página activa
    menuItems.forEach(item => {
        if (item.title.toLowerCase() !== activePage.toLowerCase()) {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.title;
            link.className = 'list-group-item list-group-item-action';
            sideMenu.appendChild(link);
        }
    });
}

// Llamamos a la función con la página activa (ejemplo: 'Education')
updateSideMenu('Education'); // Cambia 'Education' por la página activa
