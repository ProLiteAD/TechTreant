import { createApp } from 'vue';
import Main from '/public/js/App.js';
import BasicComponent from '/public/js/components/basic.js';
const app = createApp(Main);

app.component('basic-component', BasicComponent)
app.mount('#app');