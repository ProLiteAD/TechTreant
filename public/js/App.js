import { ref } from 'vue'
export default {
  props: [
    
  ],
  setup(){
    const total = ref(0);

    function modifyCart(input){
      // alert('Emit received');
      total.value += input;
      // document.querySelector('#cart-count').innerHTML = total.value;
    }

    return {
      total, modifyCart,
    }
  }
};