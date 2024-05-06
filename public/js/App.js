import { ref } from "vue";
import { allItems } from "allItems";

export default {
  props: [],
  setup() {
    const itemsAll = ref(allItems);
    const totalItems = ref([]);
    const filteredItems = ref([]);

    const cartHover = ref(false);
    const boolHoverCart = ref(false);
    const boolHoverCartIcon = ref(false);
    const showReturn = ref(false);

    function filterUnique(value, index, array){
      return array.indexOf(value) === index;
    }
    
    function updateFilter(){
      filteredItems.value = totalItems.value.filter(filterUnique);
      for(let i=0; i<filteredItems.value.length; i++){
        filteredItems.value[i].cartCount = totalItems.value.filter(x => x===filteredItems.value[i]).length;
      }
    }

    function calculateTotal() {
      let totalPrice = 0;
      for(let i=0; i<filteredItems.value.length; i++){
        totalPrice += filteredItems.value[i].price * filteredItems.value[i].cartCount;
      }
      return Math.round(totalPrice * 100) / 100;
    }
    

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
      updateFilter();
      
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

    function topReturn() {
      window.scrollTo(0, 0);
    }

    window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        if(!showReturn.value){
          showReturn.value = true;
        }
      } 
      else {
        if(showReturn.value){
          showReturn.value = false;
        }
      }
    }

    return {
      itemsAll,
      totalItems,
      filteredItems,
      cartHover,
      showReturn,
      updateFilter,
      calculateTotal,
      modifyCart,
      hoverCart,
      hoverCartIcon,
      topReturn
    };
  },
};
