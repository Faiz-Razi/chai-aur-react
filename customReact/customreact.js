
function customRender(reactElement, container) {

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.childern

    for (const prop in reactElement.props) {

        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
        
    }

    container.appendChild(domElement)

}

const reactElement = {

    type: 'a',

    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },

    childern: 'Click Me',

}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)