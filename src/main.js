import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  // {
  //   name: 'react app', // app name registered
  //   entry: '//localhost:7100',
  //   container: '#yourContainer',
  //   activeRule: '/yourActiveRule',
  // },
  {
    name: 'sub-vue',
    entry: '//localhost:8081',
    container: '#sub-app',
    activeRule: '/sub-vue',
  },
]);

start();


const app = createApp(App)
app.use(router)
app.mount('#app')