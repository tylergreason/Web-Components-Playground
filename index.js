const myDivStyle = `
                .my-div {
                    background-color: lightblue;
                    border: 1px solid black;
                    font-size: 2rem;
                    margin: auto;
                    padding: auto;
                    width: auto;
                }
                `;

// Create a class to hold our element
class MyDiv extends HTMLElement {
    constructor() {
        super();
        // define self as super(), an instance of this element: 
        // const self = super();
        // attach shadow root 
        const shadow = this.attachShadow({ mode: 'open' });
        const ele = document.createElement('div');
        ele.setAttribute('class', 'my-div');
        // get the data-text attribute defined when this element is called in the HTML: 
        const text = this.getAttribute('data-text');
        ele.textContent = text;

        const style = document.createElement('style');
        style.textContent = myDivStyle;
        console.log(style.isConnected);
        // append style to the ele: 
        shadow.appendChild(ele);
        shadow.appendChild(style);
        console.log(style.isConnected);
    }
}

class AnotherDiv extends HTMLElement {
    constructor() {
        super();

    }
}
customElements.define('my-div', MyDiv);