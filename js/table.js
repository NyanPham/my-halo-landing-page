const TABLE_FEATURES = [
    {
        featureName: 'Product bundles',
        cost: 180.00,
        theme: 'FREE'
    },
    {
        featureName: 'Quantity discount',
        cost: 180.00,
        theme: 'FREE'
    },
    {
        featureName: 'Pre-purchase upsell',
        cost: 180.00,
        theme: 'FREE'
    },
    {
        featureName: 'In-cart recommendations',
        cost: 144.00,
        theme: 'FREE'
    },
    {
        featureName: 'Free shipping goal',
        cost: 144.00,
        theme: 'FREE'
    },
    {
        featureName: 'Countdown timer',
        cost: 84.00,
        theme: 'FREE'
    },
    {
        featureName: 'Stock countdown',
        cost: 36.00,
        theme: 'FREE'
    },
    {
        featureName: 'Cart countdown',
        cost: 36.00,
        theme: 'FREE'
    },
    {
        featureName: 'Size chart',
        cost: 69.00,
        theme: 'FREE'
    },
    {
        featureName: 'Facebook messenger',
        cost: 36.00,
        theme: 'FREE'
    },
    {
        featureName: 'Popup',
        cost: 180.00,
        theme: 'FREE'
    }
]
const feeRow = document.querySelector('[data-fee-row]')
const viewMoreRow = document.querySelector('[data-view-more-row]')
const singleLineFeeRows = document.querySelectorAll('.single-line-fee-row')

export function renderTable(table, content) {
    content.forEach((featureData, index) => {
        const row = document.createElement('tr')
        if (index % 2 != 0) {
            row.classList.add('subdue-background')
        }

        const featureTD = document.createElement('td')
        featureTD.innerText = featureData.featureName

        const costTD = document.createElement('td')
        costTD.innerText = featureData.cost

        const themeTD = document.createElement('td')
        const checkCircleImg = document.createElement('img')
        checkCircleImg.src = 'assets/checkCircle.png'
        themeTD.appendChild(checkCircleImg)
        themeTD.append(featureData.theme)
        themeTD.classList.add('theme-cell')

        row.appendChild(featureTD)
        row.appendChild(costTD)
        row.appendChild(themeTD)

        table.appendChild(row)
    })
    table.appendChild(viewMoreRow)
    table.appendChild(feeRow)
    // singleLineFeeRows.forEach(singleRow => {
    //     table.appendChild(singleRow)
    // })
}

export function resizeTable() {
    const emptyCell = feeRow.querySelector('td')
    const buyButton = feeRow.querySelector('.button-container-cell')

    if (window.innerWidth <= 1075) { 
        emptyCell.style.display = 'none'
        buyButton.setAttribute('colspan', '2')
    } else {
        emptyCell.style.display = 'initial'
        buyButton.removeAttribute('colspan')
    }
}

export default TABLE_FEATURES