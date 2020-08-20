class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('JOSH');
    }
}

customElements.define('josh-tooltip', Tooltip);