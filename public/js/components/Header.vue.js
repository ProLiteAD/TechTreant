import { ref } from "vue";
export default {
  props: ["total", "isShop"],
  emits: ["hoverCartIcon"],
  setup(total) {
    const pathToImages = "/public/assets/images";
    
    function hoverCartIcon(input){
        this.$emit('hoverCartIcon',input);
    }

    return {
      total, pathToImages, hoverCartIcon
    };
  },
  template: `
    <header>
        <div>
            <a href="/">
                <img id="logo" :src="pathToImages + '/logo.png'" alt="Logo">
            </a>
        </div>
        <div class="flex-fill">
            <form action="">
                <input type="text" name="search" placeholder="Search...">
                <button type="submit"></button>
            </form>
        </div>
        <div id="cart" 
            :class="{hide: !isShop}"
            @mouseenter="hoverCartIcon(true)"
            @mouseleave="hoverCartIcon(false)">
            <a href="#">
                <img class="icon" :src="pathToImages + '/basket3.svg'" alt="Basket">
                <span id="cart-count">{{ total.total }}</span>
            </a>
        </div>
        <!-- <div>
            <a href="account">
                <img class="icon" :src="pathToImages + '/person-fill.svg'" alt="User">
            </a>
        </div> -->
    </header>
    `,
};
