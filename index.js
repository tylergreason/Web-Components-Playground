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
        // define self as super(), an instance of this element: 
        const self = super();
        // attach shadow root 
        this.shadow = this.attachShadow({ mode: 'open' });
        const ele = document.createElement('div');
        ele.setAttribute('class', 'my-div');
        // get the data-text attribute defined when this element is called in the HTML: 
        const text = this.getAttribute('data-text');
        ele.textContent = text;

        const style = document.createElement('style');
        style.textContent = myDivStyle;
        this.shadow.appendChild(style);
        this.shadow.appendChild(ele);
        // console.log(style.isConnected);
        // append style to the ele: 
        // shadow.appendChild(style);
        // console.log(style.isConnected);
    }
    connectedCallback() {
        // console.log(self);
    }
}

class AnotherDiv extends HTMLElement {
    constructor(text) {
        const self = super();
        const shadow = this.attachShadow({ mode: 'open' });
        const ele = document.createElement('div');
        if (text) {
            ele.textContent = text;
        } else {
            ele.textContent = 'no text provided';
        }
        ele.setAttribute('class', 'my-div');
        shadow.appendChild(ele);
    }
}

class ULElement extends HTMLElement {
    constructor() {
        super();
        const ele = document.createElement('ul');
        this.attachShadow({ mode: 'open' });
        for (let i = 0; i < 10; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = (`${i + 1}`);
            ele.appendChild(newLi);
        }

        this.shadowRoot.appendChild(ele);
    }
    
    connectedCallback() {
        const lis = Array.from(this.shadowRoot.querySelectorAll('li'));
        console.log(self);
        debugger;
        lis.forEach(li => {
            li.addEventListener('click', () => console.log(li));
        })
    }
}
customElements.define('my-div', MyDiv);
customElements.define('another-div', AnotherDiv);
customElements.define('custom-ul-element', ULElement);

const docFrag =
    `
                <my-div data-text="Holy cow this works"><my-div>
    `;
const wrapper = document.getElementById('wrapper');

wrapper.appendChild(document.createRange().createContextualFragment(docFrag));