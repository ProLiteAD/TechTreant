import { ref } from 'vue'
export default {
    props: {
        isHome: Boolean,
        isShop: Boolean
    },
    setup(isHome, isShop) {

    },
    template: `
    <nav>
        <ul>
            <li>
                <a :class="{current: isHome}" href="/">Home</a>
            </li><li>
                <a :class="{current: isShop}" href="shop">Shop</a></li>
        </ul>
    </nav>
    `
}