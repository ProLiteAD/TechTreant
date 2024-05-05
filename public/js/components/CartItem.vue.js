import { ref } from "vue";
export default {
  props: {
    myItem: Object,
  },
  emits: [
    'addCart',
    'removeCart'
  ],
  setup(props) {
    const totalPrice = ref(Math.round((props.myItem.price * props.myItem.cartCount) * 100) / 100);

    return {
      totalPrice,
    }
  },
  template: `
    <div class="image">
        <img :src="myItem.image[0].url" :alt="myItem.image[0].alt">
    </div>
    <div class="main">
        <h4>{{ myItem.name }}</h4>
        <div class="price">
            <p>£{{ myItem.price }}</p>
            <p class="count">&nbsp;x {{ myItem.cartCount }}</p>
            <p class="total">&nbsp;= £{{ totalPrice }}</p>
        </div>
    </div>
    `,
};
