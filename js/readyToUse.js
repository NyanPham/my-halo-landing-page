const readyToUseTemplate = document.querySelector('[data-ready-template]')

const READY_DATA = [
    {
        image: 'assets/ready1.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready2.png',
        position: {
            isCircle: true,
            align: 'right'
        }
    },
    {
        image: 'assets/ready3.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready4.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready5.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready6.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready7.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready8.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready9.png',
        position: {
            isCircle: true,
            align: 'right'
        }
    },
    {
        image: 'assets/ready10.png',
        position: {
            isCircle: false
        }
    },
    {
        image: 'assets/ready11.png',
        position: {
            isCircle: true,
            align: 'left'
        }
    },
    {
        image: 'assets/ready12.png',
        position: {
            isCircle: false
        }
    },
]


export function renderReadyCards(container, readyCards) {
    readyCards.forEach(readyData => {
        const readyDiv = readyToUseTemplate.content.cloneNode(true)
        readyDiv.querySelector('[data-ready-card]').src = readyData.image
        
        if (readyData.position.isCircle) {
            readyDiv.querySelector('[data-ready-card-container]').classList.add(`${readyData.position.align}`)
            readyDiv.querySelector('[data-ready-card]').classList.add('isCircle')
        }
        container.appendChild(readyDiv)
    })
}

export default READY_DATA