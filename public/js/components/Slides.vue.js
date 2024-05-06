import { ref } from "vue";
import { allItems } from "allItems";
export default {
  props: {

  },
  setup(props) {
    const shopItems = ref(allItems);

    function nextButton(){
        shopItems.value.push(shopItems.value.splice(0, 1)[0]);
    }
    function prevButton(){
        shopItems.value.unshift(shopItems.value.splice(-1, 1)[0]);
    }

    return {
        shopItems,
        nextButton,
        prevButton
    };
  },
  template: `
    <div class="slides-container">
        <h2>Featured Items</h2>
        <div class="slides">
            <div class="slide" v-for="i in 4">
                <h3>{{ shopItems[i].name }}</h3>
                <img :src="shopItems[i].image[0].url" :alt="shopItems[i].image[0].name" />
                <p>{{ shopItems[i].description }}</p>
            </div>
        </div>
        <div class="buttons">
            <div>
                <button class="prev" @click="prevButton">Prev</button>
            </div>
            <div>
                <button class="next" @click="nextButton">Next</button>
            </div>
        </div>
    </div>
    `,
};

{/* <div class="slide" v-for="item in shopItems">
            <h2>{{ item.name }}</h2>
            <img :src="item.image[0].url" :alt="item.image[0].name" />
            <p>{{ item.description }}</p>
        </div> */}