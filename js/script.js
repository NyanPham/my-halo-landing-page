import Blob, { randomFromMinMax } from "./blobs.js"
import FEATURES, { renderFeatures } from "./haloFeatures.js"
import HOMEPAGE_DATA, { renderHomepages } from "./homepage.js"
import PAGE_DATA, { renderPages } from "./pagesCollection.js"
import READY_DATA, { renderReadyCards } from "./readyToUse.js"
import TABLE_FEATURES, { renderTable, resizeTable } from "./table.js"
import { styleActiveDots } from "./activeDotsPagination.js"
import { sliders, observer, checkSliders, inViewSliders } from "./sliders.js"
import { scrollWhenHover } from "./pageHover.js"
import { activateBurgerClickEvent } from "./header.js"
import { activateFooterAutoScroll  } from "./footerSlider.js"

const featureContainer = document.getElementById('features-container')
const homepagesContainer = document.getElementById('homepages-container')
const homepageNavLinks = document.querySelectorAll('.homepage-nav-link')
const pageNavLinks = document.querySelectorAll('.page-nav-link')
const pagesContainer = document.getElementById('pages-container')
const paginationDots = document.querySelectorAll('[data-pag-dot]')
const readyContainer = document.getElementById('ready-cards-container')
const multipleHeaderDots = document.querySelectorAll('[data-multiple-dot]')
const multipleHeaderSliders = document.querySelectorAll('[data-multiple-slider]')
const featureTableElement = document.querySelector('[data-feature-table]')
const blobElements = document.querySelectorAll('[data-blob]')
const burgerElements = document.querySelectorAll('[data-dropdown-burger]')
const navLinks = document.querySelectorAll('[data-nav-link]')

renderFeatures(featureContainer, FEATURES)
renderHomepages(homepagesContainer, HOMEPAGE_DATA)


renderPages(pagesContainer, PAGE_DATA)
styleActiveDots(paginationDots)
renderReadyCards(readyContainer, READY_DATA)
styleActiveDots(multipleHeaderDots, multipleHeaderSliders)
renderTable(featureTableElement, TABLE_FEATURES)
activateBurgerClickEvent(burgerElements, navLinks)
activateFooterAutoScroll()
resizeTable()

window.addEventListener('resize', resizeTable)

// move blobs
const blobs = [...blobElements].map(blobElement => {
    return new Blob(blobElement, randomFromMinMax(0, 70), randomFromMinMax(0, 70), randomFromMinMax(-360, 360))
})

function updateBlobs() {
    blobs.forEach(blob => {
        blob.updatePosition()
    })
    window.requestAnimationFrame(updateBlobs)

}

window.requestAnimationFrame(updateBlobs)


// style the nav-link 
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active-nav')
        })
        navLink.classList.add('active-nav')
    })
})

// style the active homepage-nav-link 
homepageNavLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        homepageNavLinks.forEach(navLink => {
            navLink.classList.remove('active-homepage-nav')
        })
        navLink.classList.add('active-homepage-nav')
    })
})

//style the active page-nav-link 
pageNavLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        pageNavLinks.forEach(navLink => {
            navLink.classList.remove('active')
        })
        navLink.classList.add('active')
    })
})

//style the sliders

checkSliders(sliders, inViewSliders)

sliders.forEach(slider => {
    observer.observe(slider)
})

const homepageElements = document.querySelectorAll('[data-homepage]')
homepageElements.forEach(pageElement => {
    scrollWhenHover(pageElement)
})

const pageElements = document.querySelectorAll('[data-page]')
pageElements.forEach(pageElement => {
    scrollWhenHover(pageElement)
})