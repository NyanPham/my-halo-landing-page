const footerSlider = document.querySelector('[data-store-showcase]')

let interval
let isMouseOut = true

const footerSliderObserver = new IntersectionObserver(entries => {
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

footerSlider.addEventListener('mouseenter', () => {
    isMouseOut = false
    clearInterval(interval)
})

footerSlider.addEventListener('mouseleave', () => {
    isMouseOut = true
    if (footerSlider.dataset.autoValid) 
    interval = setInterval(() => {
        scrollOneStep()
    }, 3000)
})


export function activateFooterAutoScroll() {
    footerSliderObserver.observe(footerSlider)
}

function scrollOneStep() {
    const sliders = [...footerSlider.querySelectorAll('[data-slider]')]
    const closestSlider = sliders.reduce((closest, slider) => {
        const box = slider.getBoundingClientRect()
        if (slider.offsetLeft > footerSlider.scrollLeft && slider.offsetLeft < closest.offset) {
            return { offset: slider.offsetLeft, element: slider}
        } else {
            return closest
        }
    }, {offset: Number.POSITIVE_INFINITY, element: sliders[0]}).element
    const index = sliders.indexOf(closestSlider)
    const nextSlider = sliders[index + 1]
    if (!nextSlider) return
    const delta = nextSlider.getBoundingClientRect().left - footerSlider.getBoundingClientRect().left

    footerSlider.scrollBy({
        left: delta,
        behavior: 'smooth'
    })
}