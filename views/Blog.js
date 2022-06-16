import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pedro Bentes : Blog");
    }

    async getHtml() {
        let html = `
            <style scoped>
                .row .col-sm-12 *{
                    display: inline-block;
                }

                .row {
                    margin-bottom: 0;
                }

                h1 {
                    margin-bottom: 2rem;
                }

                article {
                    margin-bottom: 1rem;
                }
            </style>
            <h1>Blogs</h1>
        `;

        let routes = window.routes;

        routes.forEach(route => {
            if(route.path.includes("/blog/")){
            html += `
            <article>
                <div class="row">
                    <div class="col-sm-12">
                        <a href="${route.path}" data-link><h4>${route.metadata.title}</h4></a>
                        <p>${route.metadata.date}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <p>${route.metadata.lead}</p> <a href="${route.path}" data-link>»</a>
                    </div>
                </div>
            </article>
            `;
            }
        });
        
        return html;
    }
}