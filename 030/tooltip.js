class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('constructor()');

        // 27
        this._tooltipContainer;
        this._tooltipText = '-- default text to use if not using the attribute on the element';
        
        // 31
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {

        console.log("this.hasAttribute('text'): " + this.hasAttribute('text'));
        if(this.hasAttribute('text')) {

            // 28: grab the value on the text attribute of the custom-element
            this._tooltipText = this.getAttribute('text');

        }

        console.log('connectedCallback()');
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        
        // 27
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        
        // 31
        this.shadowRoot.appendChild(tooltipIcon);

        this.appendChild(tooltipIcon);
    }

    // Only want to call this method from within this class
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');

        // 028
        //this._tooltipContainer.textContent = 'This is the tooltip text!';
        this._tooltipContainer.textContent = this._tooltipText;
        
        this.appendChild(this._tooltipContainer);

        // 31
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);

        // 31
        this.removeChild(this._tooltipContainer);
    }
}

customElements.define('josh-tooltip', Tooltip);