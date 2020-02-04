// create a couple of components we can request and render
let SplashComponent = {
    template: `<h1>Welcome to my Super Awesome App!</h1>`
};

let AppComponent = {
    template: `<h1>This is the app page</h1>`
}

let ErrorComponent = {
    template: `<h1>Ah Ah Ah! You didn't use the magic word! Ah ah ah!</h1>`
}

// these are the same as Express routes -> router.get('/', ... do something with the request)
const routes = [
    // routes work TOP DOWN
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent } // uses a wildcard character (*) 
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");