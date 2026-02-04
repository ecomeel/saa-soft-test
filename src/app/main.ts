import { createApp } from 'vue';
import App from './App.vue';
import { pinia } from './providers/pinia';
import { ElementPlus } from './providers/element-plus';
import './styles/global.css';

createApp(App).use(pinia).use(ElementPlus).mount('#app');
