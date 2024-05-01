import { createApp } from 'vue';
import Main from '/public/js/App.js';
import Basic from '/public/js/components/Basic.vue.js';
import Header from '/public/js/components/Header.vue.js';
import Nav from '/public/js/components/Nav.vue.js';
import Footer from '/public/js/components/Footer.vue.js';
const app = createApp(Main);

app.component('basic-component', Basic);
app.component('header-component', Header);
app.component('nav-component', Nav);
app.component('footer-component', Footer);

app.mount('#app');