// Light and Dark Mode

const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');
const body = document.getElementById('body');
const navMenu = document.getElementById('hamburger-menu');
const menuItems = navMenu.querySelectorAll('a');

lightBtn.addEventListener('click', () => {
    body.style.color = '#343a40';
    body.style.background = 'whitesmoke';
    lightBtn.style.textShadow = '0 0 10px #00f7ff, 0 0 20px #00f7ff';
    darkBtn.style.textShadow = 'none';
    menuItems.forEach(item => item.style.color = 'whitesmoke');
    navMenu.style.background = '#343a40';
    menuItems.forEach(item => item.style.fontWeight = '500');
})

darkBtn.addEventListener('click', () => {
    body.style.color = 'whitesmoke';
    body.style.background = '#343a40';
    lightBtn.style.textShadow = 'none';
    darkBtn.style.textShadow = '0 0 10px #00f7ff, 0 0 20px #00f7ff';
    navMenu.style.background = 'whitesmoke';
    menuItems.forEach(item => item.style.color = '#343a40');
    menuItems.forEach(item => item.style.fontWeight = '600');
})

// Hamburger Menu

const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    const navMenu = document.getElementById('hamburger-menu')
    
    if ((navMenu.style.display === 'none' || navMenu.style.display === '') && window.innerWidth < 786) {
        navMenu.style.display = 'flex';
        navMenu.style.justifyContent = 'center';
        navMenu.style.alignItems = 'center';
        navMenu.style.position = 'fixed';
        navMenu.style.textAlign = 'center'
        navMenu.style.width = '200px';
        navMenu.style.top = '50%';
        navMenu.style.left = '50%';
        navMenu.style.transform = 'translate(-50%, -50%)';
        navMenu.style.zIndex = '1';
        navMenu.style.height = 'fit-content';
        navMenu.style.border = '4px solid rgb(62, 62, 150)';
        navMenu.style.borderRadius = '10px';
    } else {
        navMenu.style.display = 'none';
    }
    
})