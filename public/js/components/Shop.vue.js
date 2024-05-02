import { ref } from "vue";
import { allItems } from 'allItems';

export default {
  props: [],
  emits: ["totalCart"],
  setup() {
    const shopItems = ref(allItems);
    const myItems = ref([]);

    function addCart(input) {
      myItems.value.push(input);
      this.$emit("totalCart", myItems.value);
    }
    function removeCart(input) {
      const index = myItems.value.indexOf(input);
      if (index < 0) {
        return;
      }
      myItems.value.splice(index, 1);
      this.$emit("totalCart", myItems.value);
    }

    return {
      myItems,
      addCart,
      removeCart,
      shopItems,
    };
  },
  template: `
  <item-component
    v-for="item in shopItems"
    :my-item="item"
    @add-cart="(i)=>addCart(i)" 
    @remove-cart="(i)=>removeCart(i)"></item-component>
  `
};
