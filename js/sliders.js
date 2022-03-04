const slidersContainer = document.querySelector('[data-store-showcase]')

export const sliders = document.querySelectorAll('[data-slider]')
export const inViewSliders = []

export const slideUpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (inViewSliders.includes(entry.target)) return
            inViewSliders.push(entry.target)
        } else {
            if (!inViewSliders.includes(entry.target)) return
            const index = inViewSliders.indexOf(entry.target)
            inViewSliders.splice(index, 1)
        }
    })
    checkSlidersScrolling(sliders, inViewSliders)
}, {
    threshold: 0.4,
    rootMargin: '0px'
})


let inititalMousePos
let firstInView
const emptyImage = document.createElement('img')


export function checkSlidersScrolling(sliders, inViewSliders) {
    const reorderedInViewSliders = [...sliders].filter(slider => {
        if (inViewSliders.includes(slider)) return slider
    })
    reorderedInViewSliders.forEach((slider, index) => {
        if (window.innerWidth >= 800) {
            if (index != 1 && index != 2) return slider.classList.remove('slide-up')
            slider.classList.add('slide-up')
        } else if (window.innerWidth >= 600) {
            if (index === 1) return slider.classList.add('slide-up')
            slider.classList.remove('slide-up')
        } else {
            slider.classList.remove('slide-up')
        }
    })
    firstInView = reorderedInViewSliders[0]
}

slidersContainer.addEventListener('dragstart', e => {
    const draggedSlider = e.target.closest('[data-slider]')
    inititalMousePos = draggedSlider.offsetLeft + e.offsetX
    e.dataTransfer.setDragImage(emptyImage, 0, 0)
})

slidersContainer.addEventListener('dragover', e => {
    const delta = e.clientX - inititalMousePos
    slidersContainer.scrollTo(
       {
           left: -delta,
       }
    )
})

slidersContainer.addEventListener('dragleave', () => {
    const firstViewRect = firstInView.getBoundingClientRect()
    const containerRect = slidersContainer.getBoundingClientRect()
    const delta = firstViewRect.left - containerRect.left

    scrollBy(slidersContainer, delta)
})



let interval
let isMouseOut = true

const autoSliderObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && isMouseOut) {
        interval = setInterval(() => {
            scrollOneStep()
        }, 3000)
        entries[0].target.dataset.autoValid = true
    } else {
        clearTimeout(interval)
        entries[0].target.dataset.autoValid = false
    }
})

slidersContainer.addEventListener('mouseenter', () => {
    isMouseOut = false
    clearInterval(interval)
})

slidersContainer.addEventListener('mouseleave', () => {
    isMouseOut = true
    if (slidersContainer.dataset.autoValid) 
    interval = setInterval(() => {
        scrollOneStep()
    }, 3000)
})


export function activateFooterAutoScroll() {
    autoSliderObserver.observe(slidersContainer)
}

function scrollOneStep() {
    const sliders = [...slidersContainer.querySelectorAll('[data-slider]')]
    const closestSlider = sliders.reduce((closest, slider) => {
        const box = slider.getBoundingClientRect()
        if (slider.offsetLeft > slidersContainer.scrollLeft && slider.offsetLeft < closest.offset) {
            return { offset: slider.offsetLeft, element: slider}
        } else {
            return closest
        }
    }, {offset: Number.POSITIVE_INFINITY, element: sliders[0]}).element
    const index = sliders.indexOf(closestSlider)
    const nextSlider = sliders[index + 1]
    if (!nextSlider) return
    const delta = nextSlider.getBoundingClientRect().left - slidersContainer.getBoundingClientRect().left

    scrollBy(slidersContainer, delta)
}

function scrollBy(element, span) {
    element.scrollBy({
        left: span,
        behavior: 'smooth'
    })
}