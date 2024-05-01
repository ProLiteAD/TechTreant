import { ref } from 'vue'
export default {
  props: [

  ],
  emits: [
    'totalCart'
  ],
  setup() {
    const count = ref(0);

    function addToCart() {
      count.value++;
      this.$emit('totalCart', 1);
      // console.log('Add to cart');
    }
    function removeFromCart() {
      if(!count.value > 0) { return; }
      count.value--;
      this.$emit('totalCart', -1);
      // console.log('Remove from cart');
    }

    return {
      count, addToCart, removeFromCart
    }
  },
  template: `
  <p>Basic Component {{ count }}</p>

  <button 
    @click="addToCart()"
  >Add</button>

  <button 
    @click="removeFromCart()"
  >Remove</button>
  `
}