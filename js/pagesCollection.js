const pageTemplate = document.querySelector('[data-page-template]')

const PAGE_DATA = [
    {
        name: 'Category 1',
        image: 'assets/category1.png',
    },
    {
        name: 'Category 2',
        image: 'assets/category2.png',
    },
    {
        name: 'Category 3',
        image: 'assets/category3.png',
    },
    {
        name: 'Category 4',
        image: 'assets/category4.png',
    }
]

export function renderPages(container, pages) {
    pages.forEach(page => {
        const pageDiv = pageTemplate.content.cloneNode(true)
        pageDiv.querySelector('[data-page-image]').src = page.image
        pageDiv.querySelector('[data-page-name]').innerText  = page.name
        container.appendChild(pageDiv)
    })
}

export default PAGE_DATA