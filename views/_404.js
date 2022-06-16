import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pedro Bentes : Blog");
    }

    async getHtml() {
        return `
            <h1>404</h1>
            <p>Page not found!</p>
        `;
    }
}