const slidersContainer = document.querySelector('[data-store-showcase]')

export const sliders = document.querySelectorAll('[data-slider]')
export const inViewSliders = []

export const observer = new IntersectionObserver(entries => {
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
    checkSliders(sliders, inViewSliders)
}, {
    threshold: 0.4,
    rootMargin: '0px'
})


let inititalMousePos
let firstInView
const emptyImage = document.createElement('img')


export function checkSliders(sliders, inViewSliders) {
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
           left: -delta
       }
    )
})

slidersContainer.addEventListener('dragleave', () => {
    const firstViewRect = firstInView.getBoundingClientRect()
    const containerRect = slidersContainer.getBoundingClientRect()
    const delta = firstViewRect.left - containerRect.left

    slidersContainer.scrollBy({
        left: delta,
        behavior: 'smooth'
    })
})



