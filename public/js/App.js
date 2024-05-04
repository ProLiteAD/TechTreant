import { ref } from "vue";
export default {
  props: [],
  setup() {
    const totalItems = ref([]);

    const cartHover = ref(false);
    const boolHoverCart = ref(false);
    const boolHoverCartIcon = ref(false);
    

    function modifyCart(input) {
      totalItems.value = input;
    }

    function upadateCartHover() {
      cartHover.value = boolHoverCartIcon.value || boolHoverCart.value;
    }

    function hoverCart(input) {
      boolHoverCart.value = input;
      upadateCartHover();
    }

    function hoverCartIcon(input) {
      if (input) {
        boolHoverCartIcon.value = input;
        upadateCartHover();
      } else {
        setTimeout(() => {
          boolHoverCartIcon.value = input;
          upadateCartHover();
        }, 200);
      }
    }

    return {
      totalItems,
      cartHover,
      modifyCart,
      hoverCart,
      hoverCartIcon,
    };
  },
};
