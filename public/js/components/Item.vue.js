import { ref } from 'vue'

export default {
  props: {
    myItem: Object,
  },
  emits: [
    'addCart',
    'removeCart'
  ],
  setup(props) {
    const count = ref(0);
    const myImage = ref(props.myItem.image[0]);
    const oldImage = ref(props.myItem.image[0]);

    function addCart() {
      count.value++;
      this.$emit('addCart', props.myItem);
    }
    function removeCart() {
      if (!count.value > 0) { return; }
      count.value--;
      this.$emit('removeCart', props.myItem);
    }

    function updateImage(img) {
      myImage.value = img;
      oldImage.value = img;
    }
    function hoverImage(img) {
      myImage.value = img;
    }
    function unhoverImage(){
      myImage.value = oldImage.value;
    }

    function displayStars(){
      let stars = '';
      for(let i = 0; i < props.myItem.stars; i++){
        stars += '&#9733;';
      }
      if(props.myItem.stars < 5){
        for(let i = 0; i < 5 - props.myItem.stars; i++){
          stars += '&#9734;';
        }
      }
      return stars;
    }

    return {
      count,
      myImage,
      oldImage,
      addCart,
      removeCart,
      updateImage,
      hoverImage,
      unhoverImage,
      displayStars
    }
  },
  template: `
  <div class="item">
    <div class="image">
      <img :src="myImage.url" :alt="myImage.alt">
      <p v-if="myImage.attr"><a :href="myImage.attr.url" target="_blank">{{ myImage.attr.name }}</a></p>

      <div 
        v-if="myItem.image.length > 1"
        class="color">
        <div v-for="img in myItem.image"
          :class="img.color"
          @mouseover="hoverImage(img)"
          @mouseout="unhoverImage()"
          @mousedown="updateImage(img)">
        </div>
      </div>
    </div>
    <div class="main">
      <h2>{{ myItem.name }}  <span v-if="count>0">| x{{ count }}</span></h2>
      <div class="stars" v-html="displayStars()">
      </div>
      <p>{{ myItem.description }}</p>
      <ul v-for="tag in myItem.tags">
        <li>{{ tag[0].toUpperCase() + tag.slice(1) }}</li>
      </ul>

    </div>
    <div class="side">
      <h2>£{{ myItem.price }}</h2>
      <p class="o-price">£{{ myItem.oldPrice }}</p>

      <p>&check; Founding Sale</p>
      <p>&check; Free Delivery</p>

      <button 
        class="add"
        @click="addCart()">Add</button>
      
      <button 
        class="remove"
        v-show="count > 0"
        @click="removeCart()">Remove</button>
    </div>
  </div>
  `
}