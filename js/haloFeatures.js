const FEATURES = [
    {
        icon: 'assets/OS-2.png',
        featureName: 'Online Store 2.0',
        featureText: 'Drag & Drop sections and blocks to create custom pages throughout your store without special coding.'
    },
    {
        icon: 'assets/max customizable.png',
        featureName: 'Maximium Customizability',
        featureText: 'Help you create unique shopping experiences to delight your buyers.'
    },
    {
        icon: 'assets/stunning-design.png',
        featureName: 'Stunning Design',
        featureText: 'Flexible design options to achieve your desired vision. Come to us and you will see how miracle our flagship theme is.'
    },
    {
        icon: 'assets/performance.png',
        featureName: 'Great Performance',
        featureText: 'Built for fast loading speed and flexibility, Halo helps you increase conversion. Let\'s engage visitors and make sales.'
    },
    {
        icon: 'assets/star.png',
        featureName: 'Premium Features Included For Free',
        featureText: 'Save up $1,000+ with our built-in theme features for free. Don\'t need to pay for monthly apps.'
    },
    {
        icon: 'assets/update.png',
        featureName: 'Lifetime Free Updates',
        featureText: 'Theme is guaranteed to stay up to date and work with Shopify\'s ever-growing feature set. You can re-download your purchase theme at any time.'
    },
    {
        icon: 'assets/support.png',
        featureName: 'Outstanding Support',
        featureText: 'Bring to you the dedication service. Deliver the best experience you will have.'
    },
    {
        icon: 'assets/responsive.png',
        featureName: '100% Responsive Across Devices',
        featureText: 'One of our goal is showcase your store on all devices perfectly which become a business core advantage.'
    },
    {
        icon: 'assets/optimization.png',
        featureName: 'Search Engine Optimization',
        featureText: 'Combination of S.E.O and our web development team make a powerful weapon to get super high conversion rate websites.'
    }
]

const featureTemplate = document.querySelector('[data-feature-template]')


export function renderFeatures(container, features) {
    features.forEach(feature => {
        const featureDiv = featureTemplate.content.cloneNode(true)
        featureDiv.querySelector('[data-feature-icon]').src = feature.icon
        featureDiv.querySelector('[data-feature-name]').innerText = feature.featureName 
        featureDiv.querySelector('[data-feature-text]').innerText = feature.featureText 

        container.append(featureDiv)
    })
}

export default FEATURES