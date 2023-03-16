class ButtonCount {
    constructor(clicks) {
        this.clicks = clicks;
    }
}

export function toRun() {
    const button = new ButtonCount(14);
    document.getElementById("buttonClicks").value = "hi"
}