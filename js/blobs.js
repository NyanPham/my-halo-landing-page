const blobPlayground = document.getElementById('blob-playground')

class Blob {
    constructor(blobElement, initialX, initialY, initialRotation) {
        this.blobElement = blobElement
        this.initialX = initialX
        this.initialY = initialY
        this.initialRotation = initialRotation
        this.reset()
    }

    get x() {
        return parseFloat(getComputedStyle(this.blobElement).getPropertyValue('--x'))
    }

    set x(value) {
        this.blobElement.style.setProperty('--x', value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.blobElement).getPropertyValue('--y'))
    }

    set y(value) {
        this.blobElement.style.setProperty('--y', value)
    }

    get rotation() {
        return parseFloat(getComputedStyle(this.blobElement).getPropertyValue('--rotation'))
    }

    set rotation(value) {
        this.blobElement.style.setProperty('--rotation', value)
    }
    

    reset() {
        this.x = this.initialX
        this.y = this.initialX
        this.rotationDirection = Math.random() - 0.5 < 0 ? -1 : 1
        this.rotation = this.initialRotation * this.rotationDirection
        const randomNumber = randomFromMinMax(0, 2 * Math.PI)
        this.direction = {
            x: Math.sin(randomNumber),
            y: Math.cos(randomNumber)
        }


        this.velocity = randomFromMinMax(0.1, 0.2)
    }

    updatePosition() {
        this.x = this.x + this.direction.x * this.velocity / 3
        this.y = this.y + this.direction.y * this.velocity / 3
        this.rotation += this.velocity

        const boxRect = this.blobElement.getBoundingClientRect()
        const playGroundRect = blobPlayground.getBoundingClientRect()
        
        if (boxRect.bottom >= playGroundRect.bottom + 150 || boxRect.top <= playGroundRect.top - 150) {
            this.direction.y *= -1
        }

        if (boxRect.left <= playGroundRect.left - 150 || boxRect.right >= playGroundRect.right + 150) {
            this.direction.x *= -1
        }
    }
}

export function randomFromMinMax(min, max) {
    return Math.random() * (max - min) + min 
}


export default Blob