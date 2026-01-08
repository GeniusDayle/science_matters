// Global Declarations ------------------------------------------------------------------

    const modalContent = document.querySelector('.modal-content')
    const modal = document.querySelector('.modal');

// Light and Dark Mode ------------------------------------------------------------------

    // Toggle Light and Dark Mode
    const lightBtn = document.querySelectorAll('.light-btn');
    const darkBtn = document.querySelectorAll('.dark-btn');
    const body = document.getElementById('body');
    const navMenu = document.getElementById('hamburger-menu');
    const menuItems = navMenu.querySelectorAll('a');
    const savedTheme = localStorage.getItem('theme');
    
    // Light Mode Style Changes
    lightBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            body.style.color = '#343a40';
            body.style.background = 'whitesmoke';
            lightBtn.forEach(b => b.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116');
            darkBtn.forEach(b => b.style.textShadow = 'none');
            menuItems.forEach(item => item.style.color = '#343a40');
            navMenu.style.background = 'whitesmoke';
            navMenu.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.65)';
            menuItems.forEach(item => item.style.fontWeight = '500');
            localStorage.setItem('theme', 'light');
            modalContent.style.background = 'whitesmoke';
            modalContent.style.color = '#343a40';
        });
    });

    // Dark Mode Style Changes
    darkBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            body.style.color = 'whitesmoke';
            body.style.background = '#343a40';
            darkBtn.forEach(b => b.style.textShadow = '0 0 10px #fbd116, 0 0 20px #fbd116');
            lightBtn.forEach(b => b.style.textShadow = 'none');
            menuItems.forEach(item => item.style.color = 'whitesmoke');
            navMenu.style.background = '#343a40';
            navMenu.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.65)';
            menuItems.forEach(item => item.style.fontWeight = '600');
            localStorage.setItem('theme', 'dark');
            modalContent.style.background = '#343a40';
            modalContent.style.color = 'whitesmoke';
        });
    });

    // Mode Choice Saved
    if (savedTheme === 'light') {
        lightBtn.forEach(btn => btn.click());
        } else if (savedTheme === 'dark') {
        darkBtn.forEach(btn => btn.click());
    }

//----------------------------------------------------------------------------------------

// Hamburger Menu ------------------------------------------------------------------------

    // Toggle Hamburger Menu
    const menuBtn = document.getElementById('menu-btn');
    const hamburgerMenuBackdrop = document.querySelector('.hamburger-menu-backdrop')
    const menuClose = document.querySelector('.menu-close')

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
            navMenu.style.zIndex = '2000';
            navMenu.style.height = 'fit-content';
            navMenu.style.borderRadius = '10px';
            hamburgerMenuBackdrop.style.display = 'unset';
            modal.style.display = 'none'
        } else {
            navMenu.style.display = 'none';
            hamburgerMenuBackdrop.style.display = 'none'
        }
    })

    // Close Hamburger Menu on Resize, Menu Item and Clicking Outside
    function closeMenu() {
        navMenu.style.display = 'none';
        hamburgerMenuBackdrop.style.display = 'none';
    }

    menuClose.addEventListener('click', () => {
        closeMenu()
    })
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 786) {
            closeMenu();
        }
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 786) {
                closeMenu();
            }
        })
    })
    
    document.addEventListener('click', (e) => {
        const clickedInsideMenu = navMenu.contains(e.target);
        const clickedMenuBtn = menuBtn.contains(e.target);
        const clickedLightBtn = [...lightBtn].some(btn => btn.contains(e.target));
        const clickedDarkBtn = [...darkBtn].some(btn => btn.contains(e.target));

        if (!clickedInsideMenu && !clickedMenuBtn && !clickedLightBtn && !clickedDarkBtn) {
            closeMenu();
        }
    });

//----------------------------------------------------------------------------------------

// Team Info -----------------------------------------------------------------------------

    // Select modal elements
    const modalName = modal.querySelector('.modal-name');
    const modalRole = modal.querySelector('.modal-role');
    const modalBlurb = modal.querySelector('.modal-blurb');
    const modalImg = modal.querySelector('.modal-img');
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    // Select all team member images
    const teamImages = document.querySelectorAll('.team-member img');

    // Function to open modal
    function openModal(member) {
        modalName.textContent = member.querySelector('h2').textContent;
        modalRole.textContent = member.querySelector('h3').textContent;
        modalBlurb.textContent = member.querySelector('p').textContent;
        modalImg.src = member.dataset.img;
        modalImg.alt = member.querySelector('h2').textContent;

        modal.style.display = 'unset';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Click on team member to open modal
    teamImages.forEach(img => {
        img.addEventListener('click', () => {
            const member = img.closest('.team-member');
            openModal(member);
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // ESC key to close modal
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });

    // View more function
    const grid = document.getElementById('team-grid')
    const viewMore = document.getElementById('view-more');

    viewMore.addEventListener('click', () => {
        grid.classList.toggle("show-all");

        if (grid.classList.contains("show-all")) {
            viewMore.textContent = "View Less";
        } else {
            viewMore.textContent = "View More";
        }
    });

// ---------------------------------------------------------------------------------------

// Picture Slideshow ---------------------------------------------------------------------

    const images = ["./Images/vision.jpg", "./Images/mission.jpg", "./Images/objectives.jpg"];
    let index = 0;

    setInterval(() => {
        index = (index +1) % images.length;
        document.getElementById("slide-show").src  = images[index];
    }, 3000);

//----------------------------------------------------------------------------------------

// Recent Updates ------------------------------------------------------------------------

    const posts = document.getElementById('posts');

//fetch(`https://graph.facebook.com/v17.0/1950244881867683/media?fields=id,caption,media_url,timestamp&access_token=EAAS42fdpZBZB8BP0BSJRiGJgxbCNVxW0G9WT1ypIxVTE9g4E04p2Mlm7DKRQYcc9YYIDw9RboTekmrXor70MSYS0mDKGbh2FjN63rLZAmU9ZAbevAddst95iEPMPCyR2ZB8dqanHWP5lFe7F2sBEj1ysORamZActt0PbVD4lQsEdqYr58aIDXH03nRXN6wRZCjKM9eFvNlK0inIk0zSr4ZAU5gE7We9anJPN2qqU4E1GjNzswpxk1H0yGpsZD`)
//    .then(res => res.json())
//    .then(data => {

        // Grab the 5 most recent posts
//      const postsArr = data.data.slice(0, 5);

        // Build HTML for each post
//        const html = postsArr.map(post => `
//            <h2>${post.caption ? post.caption.split('\n')[0] : 'No caption'}</h2>
//           <img src="${post.media_url}" alt="Instagram post">
//            <p>${post.caption || ''}</p>
//            <hr>
//        `).join('');

        // Insert into the page
//        posts.innerHTML = html;

        // For debugging: see the full API response
//        console.log(data);
//    })
//    .catch(err => {
//        console.error("Fetch error:", err);
//        posts.innerHTML = "<p>Failed to load posts.</p>";
//    });

//----------------------------------------------------------------------------------------