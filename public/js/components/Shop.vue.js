import { nextTick, ref } from "vue";
import { allItems } from "allItems";

export default {
  props: [],
  emits: ["totalCart"],
  setup() {
    const shopItems = ref(allItems);
    const myItems = ref([]);
    const renderComponent = ref(true);

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

    function sortName(isReversed = false) {
      if (isReversed) {
        shopItems.value.sort((b, a) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else {
        shopItems.value.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    function sortPrice(isReversed = false) {
      if (isReversed) {
        shopItems.value.sort((b, a) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      } else {
        shopItems.value.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
      }
    }

    // Force re-render images
    async function forceRender() {
      renderComponent.value = false;
      await nextTick();
      renderComponent.value = true;
    }

    async function filterPressed(inputRadio) {
      const radio = document.querySelectorAll(".radioFilter");
      // Group radio buttons
      for (let i = 0; i < radio.length; i++) {
        if (i == inputRadio) {
          radio[i].checked = true;
        } else {
          radio[i].checked = false;
        }
      }

      switch (inputRadio) {
        default:
          sortName();
          await forceRender();
          break;
        case 1:
          console.log("reverse");
          sortName(true);
          await forceRender();
          break;
        case 2:
          sortPrice();
          await forceRender();
          break;

        case 3:
          sortPrice(true);
          await forceRender();
          break;
      }
    }
    filterPressed(0);

    return {
      shopItems,
      myItems,
      renderComponent,
      addCart,
      removeCart,
      filterPressed,
    };
  },
  template: `
  <div class="shopping">
    <div class="filter">
    <h2>Filters</h2>
      <div class="sortFilter">
      <h3>Name</h3>
        <label for="sortName">
          <input id="sortName" class="radioFilter" type="radio" checked="true" @click="filterPressed(0)" />
          Normal
        </label>
        <label for="sortName2">
          <input id="sortName2" class="radioFilter" type="radio" @click="filterPressed(1)" />
          Reverse
        </label>

        <h3>Price</h3>
        <label for="sortPrice">
          <input id="sortPrice" class="radioFilter" type="radio" @click="filterPressed(2)" />
          Low - High
        </label>
        <label for="sortPrice2">
          <input id="sortPrice2" class="radioFilter" type="radio" @click="filterPressed(3)" />
          High - Low
        </label>
      </div>
    </div>
    
    <div class="items" v-if="renderComponent">
      <div>
        <p class="breadcrumb"><a>Shop</a> / </p>
        <h1>Shop</h1>
      </div>
      <item-component
        v-for="item in shopItems"
        :my-item="item"
        @add-cart="(i)=>addCart(i)" 
        @remove-cart="(i)=>removeCart(i)"></item-component>
    </div>
  </div>
  `,
};
