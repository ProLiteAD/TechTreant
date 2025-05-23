const pathToJs = '/public/js/App.js';

import { createApp } from 'vue';
import Main from '/public/js/App.js';
import Nav from '/public/js/components/Nav.vue.js';
import Header from '/public/js/components/Header.vue.js';
import Slides from '/public/js/components/Slides.vue.js';
import Shop from '/public/js/components/Shop.vue.js';
import Item from '/public/js/components/Item.vue.js';
import Cart from '/public/js/components/Cart.vue.js';
import CartItem from '/public/js/components/CartItem.vue.js';
import Checkout from '/public/js/components/Checkout.vue.js';
import Footer from '/public/js/components/Footer.vue.js';

const app = createApp(Main);

app.component('header-component', Header);
app.component('nav-component', Nav);

app.component('slides-component', Slides);
app.component('shop-component', Shop);
app.component('item-component', Item);
app.component('cart-component', Cart);
app.component('cart-item-component', CartItem);
app.component('checkout-component', Checkout);

app.component('footer-component', Footer);

app.mount('#app');