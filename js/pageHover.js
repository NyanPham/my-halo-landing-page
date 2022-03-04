let elementToScroll, startTime, previousTime, scrollSpan
let request

const requestAnimationFrame = window.requestAnimationFrame
const cancelAnimationFrame = window.cancelAnimationFrame

export function scrollWhenHover(pageElement) {
    pageElement.addEventListener('mouseenter', () => { 
        const pageImage = pageElement.querySelector('iframe')
        const image = pageImage.contentWindow.document.body.querySelector('img')
        const imageHeight = image.scrollHeight
        scrollSpan = imageHeight
        elementToScroll = pageImage.contentWindow
        request = requestAnimationFrame(scrollWithDuration)
    })
    
    pageElement.addEventListener('mouseleave', e => {
        cancelAnimationFrame(request)
        elementToScroll.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        startTime = undefined
    })
}

function scrollWithDuration(time) {
    if (startTime === undefined) {
        startTime = time
    }

    const elapsed = time - startTime

    if (previousTime !== time) {
        const spanToScroll = Math.min(0.3 * elapsed, scrollSpan)
        elementToScroll.scrollTo({
            top: spanToScroll
        })
    }
    previousTime = time
    request = requestAnimationFrame(scrollWithDuration)
}
