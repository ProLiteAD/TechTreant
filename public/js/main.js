// my-component.js
import { ref } from 'vue';
export default {
  setup() {
    const message = ref("HelloW!");
    const count = ref(2);
    return { count, message };
  }
}