import { ref } from 'vue'

export default {
  setup(){
    const total = ref(2);

    return {
      total
    }
  }
};