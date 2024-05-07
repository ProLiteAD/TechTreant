import { ref } from "vue";
// import { allItems } from "allItems";
export default {
  props: {
    title: String,
    items: Object,
  },
  setup(props) {
    const title = ref(props.title);
    const shopItems = ref(props.items);

    function nextButton() {
      shopItems.value.push(shopItems.value.splice(0, 1)[0]);
    }
    function prevButton() {
      shopItems.value.unshift(shopItems.value.splice(-1, 1)[0]);
    }

    return {
      title,
      shopItems,
      nextButton,
      prevButton,
    };
  },
  template: `
    <div class="slides-container">
        <h2>{{ title }}</h2>
        <div class="slides">
            <div class="slide" v-for="i in 4">
                <h3>{{ shopItems[i].name }}</h3>
                <a :href="'shop/#item_' + shopItems[i].id">
                    <img :src="shopItems[i].image[0].url" :alt="shopItems[i].image[0].name" />
                </a>
                <p>{{ shopItems[i].description }}</p>
                <p><strong>£{{ shopItems[i].price }}</strong></p>
                <a :href="'shop/#item_' + shopItems[i].id">
                <button>View Product</button>
                </a>
            </div>
        </div>
        <button class="prev" @click="prevButton">Prev</button>
        <button class="next" @click="nextButton">Next</button>
    </div>
    `,
};
