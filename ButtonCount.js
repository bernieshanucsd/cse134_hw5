class ButtonCount extends HTMLElement {
    constructor(clicks) {
        super();
        this.clicks = clicks;
    }

    updateText() {
        this.clicks++;
        this.shadowRoot.innerHTML
    }

    connectedCallback() {
        this.clicks = 0;
        this.textContent = this.label;

        this.attachShadow({mode: "open"})

        const wrapper = document.createElement("button");
        wrapper.setAttribute("id", "numClicks")
        wrapper.innerHTML = "Times Clicked: " + this.clicks
        wrapper.addEventListener("click", this.updateText);

        this.shadowRoot.append(wrapper);
    }
}

window.customElements.define("button-count", ButtonCount);