import router from './router.js';
// import store from './store.js';

import App from './components/app.js';

var app = new Vue({
  router,
  //store,
  render: h => h(App),
}).$mount('#app');