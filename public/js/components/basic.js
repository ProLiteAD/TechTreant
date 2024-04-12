import { ref } from 'vue'
export default {
  props:[
    'title'
  ],
  setup(title) {
    const message = ref("Current: ");
    const count = ref(0);
    
    function increment() {
      count.value++;
    }

    return {
      message,
      count,
      increment
    }
  },
  template: `
    <h2>{{ title }}</h2>
    <p>{{ message }}
      <button 
      :disabled="count >= 10"
      @click="increment"> {{ count }} </button>
    </p>
  `
}