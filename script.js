// Light and Dark Mode ------------------------------------------------------------------

    // Toggle Light and Dark Mode
    const lightBtn = document.querySelectorAll('.light-btn');
    const darkBtn = document.querySelectorAll('.dark-btn');
    const body = document.getElementById('body');
    const navMenu = document.getElementById('hamburger-menu');
    const menuItems = navMenu.querySelectorAll('a');
    const savedTheme = localStorage.getItem('theme');
    
    lightBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        body.style.color = '#343a40';
        body.style.background = 'whitesmoke';
        lightBtn.forEach(b => b.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116');
        darkBtn.forEach(b => b.style.textShadow = 'none');
        menuItems.forEach(item => item.style.color = 'whitesmoke');
        navMenu.style.background = '#343a40';
        navMenu.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.65)';
        menuItems.forEach(item => item.style.fontWeight = '500');
        localStorage.setItem('theme', 'light');
    });
    });

    darkBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        body.style.color = 'whitesmoke';
        body.style.background = '#343a40';
        darkBtn.forEach(b => b.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116');
        lightBtn.forEach(b => b.style.textShadow = 'none');
        menuItems.forEach(item => item.style.color = '#343a40');
        navMenu.style.background = 'whitesmoke';
        navMenu.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.65)';
        menuItems.forEach(item => item.style.fontWeight = '600');
        localStorage.setItem('theme', 'dark');
    });
    });

    // Mode Choice Saved
    if (savedTheme === 'light') {
        lightBtn.forEach(btn => btn.click());
        } else if (savedTheme === 'dark') {
        darkBtn.forEach(btn => btn.click());
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
        const clickedInsideMenu = navMenu.contains(e.target);
        const clickedMenuBtn = menuBtn.contains(e.target);
        const clickedLightBtn = [...lightBtn].some(btn => btn.contains(e.target));
        const clickedDarkBtn = [...darkBtn].some(btn => btn.contains(e.target));

        if (!clickedInsideMenu && !clickedMenuBtn && !clickedLightBtn && !clickedDarkBtn) {
            navMenu.style.display = 'none';
        }
    });

// Picture Slideshow --------------------------------------------------------------------

    const images = ["./Images/vision.jpg", "./Images/mission.jpg", "./Images/objectives.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index +1) % images.length;
        document.getElementById("slide-show").src  = images[index];
    }, 3000);

//----------------------------------------------------------------------------------------