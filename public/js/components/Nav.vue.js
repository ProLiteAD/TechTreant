import { ref } from "vue";
export default {
  props: {
    isHome: Boolean,
    isShop: Boolean,
    isSupport: Boolean,
  },
  setup() {},
  template: `
    <nav>
        <ul>
            <li>
                <a :class="{current: isHome}" href="/">Home</a>
            </li><li>
                <a :class="{current: isShop}" href="shop">Shop</a>
            </li><li>
            <a :class="{current: isSupport}" href="support">Support</a>
            </li>
        </ul>
    </nav>
    `,
};
