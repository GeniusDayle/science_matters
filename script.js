// Light and Dark Mode ------------------------------------------------------------------

    // Toggle Light and Dark Mode
    const lightBtn = document.getElementById('light-btn');
    const darkBtn = document.getElementById('dark-btn');
    const body = document.getElementById('body');
    const navMenu = document.getElementById('hamburger-menu');
    const menuItems = navMenu.querySelectorAll('a');
    const savedTheme = localStorage.getItem('theme');

    lightBtn.addEventListener('click', () => {
        body.style.color = '#343a40';
        body.style.background = 'whitesmoke';
        lightBtn.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116';
        darkBtn.style.textShadow = 'none';
        menuItems.forEach(item => item.style.color = 'whitesmoke');
        navMenu.style.background = '#343a40';
        menuItems.forEach(item => item.style.fontWeight = '500');
        localStorage.setItem('theme', 'light');
    })

    darkBtn.addEventListener('click', () => {
        body.style.color = 'whitesmoke';
        body.style.background = '#343a40';
        lightBtn.style.textShadow = 'none';
        darkBtn.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116';
        navMenu.style.background = 'whitesmoke';
        menuItems.forEach(item => item.style.color = '#343a40');
        menuItems.forEach(item => item.style.fontWeight = '600');
        localStorage.setItem('theme', 'dark');
    })

    // Mode Choice Saved
    if (savedTheme === 'light') {
        lightBtn.click();
    } else if (savedTheme === 'dark') {
        darkBtn.click();
    }

// Hamburger Menu ----------------------------------------------------------------------

    // Toggle Hamburger Menu
    const menuBtn = document.getElementById('menu-btn');

    menuBtn.addEventListener('click', () => {
        const navMenu = document.getElementById('hamburger-menu')
        
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex';
            navMenu.style.justifyContent = 'center';
            navMenu.style.alignItems = 'flex=start';
            navMenu.style.position = 'fixed';
            navMenu.style.textAlign = 'center'
            navMenu.style.width = '200px';
            navMenu.style.top = '50%';
            navMenu.style.left = '50%';
            navMenu.style.transform = 'translate(-50%, -50%)';
            navMenu.style.zIndex = '1';
            navMenu.style.height = 'fit-content';
            navMenu.style.border = '4px solid #ce1126';
            navMenu.style.borderRadius = '10px';
        } else {
            navMenu.style.display = 'none';
        }
    })

    // Close Hamburger Menu on Resize, Menu Item and Clicking Outside
    window.addEventListener('resize', () => {
        if (window.innerWidth > 786) {
            navMenu.style.display = 'none';
        }
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 786) {
                navMenu.style.display = 'none'
            }
        })
    })
    
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target) && !lightBtn.contains(e.target) & !darkBtn.contains(e.target)) {
            navMenu.style.display = 'none';
        }
    });

// ---------------------------------------------------------------------------------------