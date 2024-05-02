import { ref } from 'vue'
export default {
  props: [
    
  ],
  setup(){
    const totalItems = ref([]);

    function modifyCart(input){
      // alert('Emit received');

      totalItems.value = input;
      
      // document.querySelector('#cart-count').innerHTML = total.value;
    }

    return {
      totalItems, modifyCart,
    }
  }
};