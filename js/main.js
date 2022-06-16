import _404 from "../views/_404.js";
import Index from "../views/index.js";
import Blog from "../views/Blog.js";
import PostView from "../views/posts/PostView.js";
import Software from "../views/Software.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "", view: _404 },
        { path: "/", view: Index },
        { path: "/software", view: Software },
        { path: "/blog", view: Blog },

        //Blog post routes
        { path: "/blog/test", view: PostView, metadata: { title: "Test post", lead: "This is a test post meant to test functionality", date: "16/06/2022" } },
    ];

    window.routes = routes;

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    /* If a route parameter exists try rerouting to that path */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("route")) {
        navigateTo(urlParams.get("route"));
        return;
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});