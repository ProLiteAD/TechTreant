import { ref } from "vue";
export default {
  props: {
    isHome: Boolean,
    isShop: Boolean,
  },
  setup(props) {
    const year = ref(new Date().getFullYear());

    return {
      year,
    };
  },
  template: `
    <footer>
        <p>This website was designed and developed by Syed Adil Ahmed 2024-<span id="year">{{ year }}</span>.</p>
        <ul>
            <li>
                <a :class="{current: isHome}" href="/">Home</a>
            </li><li>
                <a :class="{current: isShop}" href="shop">Shop</a>
            </li><li>
                <a href="cart">Cart</a>
            </li><li>
                <a href="account">Account</a>
            </li>
        </ul>
    </footer>
    `,
};
