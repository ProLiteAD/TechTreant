import { ref } from "vue";
export default {
  props: ["myItems"],
  emits: ["hoverCart"],
  setup(props) {
    const filteredItems = ref([]);

    function filterUnique(value, index, array){
      return array.indexOf(value) === index;
    }

    function updateCart(){
      filteredItems.value = props.myItems.filter(filterUnique);
      for(let i=0; i<filteredItems.value.length; i++){
        filteredItems.value[i].cartCount = props.myItems.filter(x => x===filteredItems.value[i]).length;
      }
    }

    function hoverCart(input) {
      this.$emit("hoverCart", input);
      // updateCart();
    }

    return {
      filteredItems,
      updateCart,
      hoverCart
    };
  },
  template: `
    <div class="cart"
      @mouseenter="hoverCart(true)"
      @mouseleave="hoverCart(false)">
        <p>The following item are in the cart...</p>
        <div class="items" v-for="item in filteredItems">
          <p>{{ item.name }} | {{ item.cartCount }}</p>
        </div>
      </div>
    `,
};
