import { ref } from "vue";
export default {
  props: ["filteredItems", "totalPrice"],
  emits: ["hoverCart"],
  setup(props) {
    function hoverCart(input) {
      this.$emit("hoverCart", input);
    }

    function checkoutPage() {
      sessionStorage.setItem("cart", JSON.stringify(props.filteredItems));
      document.location.href = "/checkout";
    }

    return {
      props,
      hoverCart,
      checkoutPage,
    };
  },
  template: `
    <div class="cart"
      @mouseenter="hoverCart(true)"
      @mouseleave="hoverCart(false)">
        <p v-if="filteredItems.length<1">The cart is empty!</p>
        <div class="items">
          <div class="item" v-for="item in filteredItems">
            <cart-item-component :myItem="item"></cart-item-component>
          </div>
          <div class="totalPrice" v-if="filteredItems.length>0">
            <p>Total: £{{ props.totalPrice }}</p>
            <button class="checkout" @click="checkoutPage()">Checkout</button>
          </div>
        </div>
      </div>
    `,
};
