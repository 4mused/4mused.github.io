import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Pedro Bentes");
    }

    async getHtml() {
        let html = "";

        let i = 0;
        routes.forEach((route) => {
            if(route.path.includes("/blog/") && i < 5){
                i++;
                html += `
                    <li class="col-sm-12">
                        <a href="${route.path}" data-link>${route.metadata.title}</a>
                        <p style="display: inline;">${route.metadata.date}</p>
                    </li>
                `;
            }
        });

        return `
            <div class="row">
                <div class="col-sm-12">
                    <h1>Hi, I'm Pedro Bentes</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <h3>About Me</h3>
                </div>
                <div class="col-sm-3">
                    <img style="width: 100%;" src="./assets/38290727.jpg" alt="">
                </div>
                <div class="col-sm-9">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ab sunt ex deleniti, debitis sed. Nisi iste perspiciatis praesentium, quod, officiis magni nobis eos, possimus corrupti minus error similique nam consectetur dolorem unde rerum accusamus veritatis optio. Reprehenderit quaerat, sequi id, voluptatum illo ducimus sapiente, facilis architecto molestiae ut odio.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6">
                    <h3>Latest Blog Posts</h3>
                    <ul>
                       ${html}
                    </ul>
                </div>

                <!--
                <div class="col-sm-6">
                    <h3>My Projects</h3>
                    <ul>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
                -->

                <div class="col-sm-6">
                    <h3>Contact</h3>
                    <p>You can contact me via my <a href="mailto:pedrogomes2000.3@gmail.com">email</a></p>
                </div>
            </div>

            <div class="row">
                
            </div>
        `;
    }
}