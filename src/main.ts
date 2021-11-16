import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue';
import utils from './direactive/promission/button';
import './style/reset.css'
import 'ant-design-vue/dist/antd.css';
createApp(App).directive('permission', utils.directive)
  .use(Antd).use(router).mount('#app')
