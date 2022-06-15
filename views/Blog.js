import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pedro Bentes : Blog");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>

            <a href="/posts/Hello World" class="nav__link" data-link>Settings</a>
        `;
    }
}