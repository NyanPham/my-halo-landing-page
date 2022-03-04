const headerElement = document.getElementById('header')
const fixedHeaderElement = document.getElementById('fixed-header')


export function activateBurgerClickEvent(burgerElements, navLinks) {
    window.addEventListener('click', (e) => {
        if (e.target.closest('[data-dropdown-burger]')) {
            burgerElements.forEach(burger => {
                burger.classList.toggle('active')
            })
            document.querySelector('[data-side-menu]').classList.toggle('active')
        } else if (e.target.closest('[data-side-menu]') == null) {
            burgerElements.forEach(burger => {
                burger.classList.remove('active')
            })
            document.querySelector('[data-side-menu]').classList.remove('active')

        }
    })

    
    // style the nav-link 
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-nav')
            })
            const navLinkData = navLink.dataset.navLink
            const relevantNavlinks = [...navLinks].filter(navLink => navLink.dataset.navLink === navLinkData)
            relevantNavlinks.forEach(navLink => {
                navLink.classList.add('active-nav')
            })
        })
    })
    
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            burgerElements.forEach(burger => {
                burger.classList.remove('active')
            })
            document.querySelector('[data-side-menu]').classList.remove('active')
        })
    })   

    document.querySelectorAll('[data-side-menu-item]').forEach(sideMenuItem => {
        sideMenuItem.addEventListener('click', () => {
            burgerElements.forEach(burger => {
                burger.classList.remove('active')
            })
            document.querySelector('[data-side-menu]').classList.remove('active')
        })
    })

    activateHeaderWhenScroll()
}

function activateHeaderWhenScroll() {
    const headerObserver = new IntersectionObserver(entries => {
        const headerEntry = entries[0]
        const sideMenu = document.querySelector('[data-side-menu]')
        
        if (!headerEntry.isIntersecting) {
            fixedHeaderElement.classList.add('visible')
            headerElement.querySelector('[data-dropdown-burger]').classList.remove('active')
            fixedHeaderElement.querySelector('[data-dropdown-burger]').classList.remove('active')
            sideMenu.classList.remove('active')
        } else {
            fixedHeaderElement.classList.remove('visible')
            fixedHeaderElement.querySelector('[data-dropdown-burger]').classList.remove('active')
            headerElement.querySelector('[data-dropdown-burger]').classList.remove('active')
            sideMenu.classList.remove('active')
        }
    }, {
        threshold: 0.1,
    })

    headerObserver.observe(headerElement)
}