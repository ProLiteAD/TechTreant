import { createApp } from 'vue';
import Main from '/public/js/App.js';
import Nav from '/public/js/components/Nav.vue.js';
import Header from '/public/js/components/Header.vue.js';
import Shop from '/public/js/components/Shop.vue.js';
import Item from '/public/js/components/Item.vue.js';
import Footer from '/public/js/components/Footer.vue.js';

const app = createApp(Main);

app.component('header-component', Header);
app.component('nav-component', Nav);


app.component('shop-component', Shop);
app.component('item-component', Item);

app.component('footer-component', Footer);

app.mount('#app');