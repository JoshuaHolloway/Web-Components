class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('constructor()');

        // 27
        this._tooltipContainer;
    }
    connectedCallback() {
        console.log('connectedCallback()');
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';

        // 27
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));

        this.appendChild(tooltipIcon);
    }

    // Only want to call this method from within this class
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = 'This is the tooltip text!';
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);
    }
}

customElements.define('josh-tooltip', Tooltip);