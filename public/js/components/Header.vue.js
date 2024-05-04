import { ref } from "vue";
export default {
  props: ["total"],
  emits: ["hoverCartIcon"],
  setup(total) {
    
    function hoverCartIcon(input){
        this.$emit('hoverCartIcon',input);
    }

    return {
      total, hoverCartIcon
    };
  },
  template: `
    <header>
        <div>
            <a href="/">
                <img id="logo" src="/public/assets/images/logo.png" alt="Logo">
            </a>
        </div>
        <div class="flex-fill">
            <form action="">
                <input type="text" name="search" placeholder="Search..."><button type="submit">
                </button>
            </form>
        </div>
        <div id="cart" 
            @mouseenter="hoverCartIcon(true)"
            @mouseleave="hoverCartIcon(false)">
            <a href="#">
                <img class="icon" src="/public/assets/images/basket3.svg" alt="Basket">
                <span id="cart-count">{{ total.total }}</span>
            </a>
        </div>
        <div>
            <a href="account">
                <img class="icon" src="/public/assets/images/person-fill.svg" alt="User">
            </a>
        </div>
    </header>
    `,
};
