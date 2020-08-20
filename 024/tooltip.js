class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('constructor()');
    }
    connectedCallback() {
        console.log('connectedCallback()');
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
         this.appendChild(tooltipIcon);
    }
}

customElements.define('josh-tooltip', Tooltip);