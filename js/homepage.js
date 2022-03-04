const homepageTemplate = document.querySelector('[data-homepage-template]')

const HOMEPAGE_DATA = [
    {
        name: 'Home 1',
        image: 'assets/home1.png',
        isNew: true,
        isComming: false,
    },
    {
        name: 'Home 2',
        image: 'assets/home2.png',
        isNew: true,
        isComming: false,
    },
    {
        name: 'Home 3',
        image: 'assets/home3.png',
        isNew: false,
        isComming: false,
    },
    {
        name: 'Home 4',
        image: 'assets/home4.png',
        isNew: false,
        isComming: false,
    },
    {
        name: 'Home 5',
        image: 'assets/home5.png',
        isNew: false,
        isComming: false,
    },
    {
        name: 'Home 6',
        image: 'assets/home6.png',
        isNew: false,
        isComming: true,
    },
    {
        name: 'Home 7',
        image: 'assets/home7.png',
        isNew: false,
        isComming: true,
    },
    {
        name: 'Home 8',
        image: 'assets/home8.png',
        isNew: false,
        isComming: true,
    },
    {
        name: 'Home 9',
        image: 'assets/home9.png',
        isNew: false,
        isComming: true,
    }
]

export function renderHomepages(container, homepages) {
    homepages.forEach(homepage => {
        const homepageDiv = homepageTemplate.content.cloneNode(true)
        homepageDiv.querySelector('[data-homepage-image]').src = homepage.image
        homepageDiv.querySelector('[data-homepage-name]').innerText = homepage.name
        if (homepage.isNew) {
            const newTag = document.createElement('span')
            newTag.classList.add('new-tag')
            newTag.innerText = 'New'
            homepageDiv.querySelector('[data-homepage]').append(newTag)
        }
        if (homepage.isComming) {
            const comingTag = document.createElement('span')
            comingTag.classList.add('coming-tag')
            comingTag.innerText = 'Coming Soon'
            homepageDiv.querySelector('[data-homepage]').append(comingTag)
        }
        container.append(homepageDiv)
    })
    document.querySelector('[data-add-homepage-button]').style.order = HOMEPAGE_DATA.length 
}

export default HOMEPAGE_DATA

