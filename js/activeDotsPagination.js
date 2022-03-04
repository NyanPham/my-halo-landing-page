export function styleActiveDots(dotElements, sliders = undefined) {
    dotElements.forEach(dot => {
        dot.addEventListener('click', () => {
            dotElements.forEach(dot => {
                dot.classList.remove('active')
            }) 
            dot.classList.add('active')
            if (!sliders) return
            const activeIndex = [...dotElements].indexOf(dot)
            const activeSlider = sliders[activeIndex]
            sliders.forEach(slider => {
                slider.classList.remove('visible')
            })
            activeSlider.classList.add('visible')
        })
    })
}