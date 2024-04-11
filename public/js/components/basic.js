import { ref } from 'vue'
export default {
  setup() {
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
    <p>{{ message }}
      <button 
      :disabled="count >= 10"
      @click="increment"> {{ count }} </button>
    </p>
  `
}