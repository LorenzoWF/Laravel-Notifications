require('./bootstrap');
import store from './vuex/store'

window.Vue = require('vue');

/**
 * Components
 */

Vue.component('notifications', require('./components/notifications/Notifications').default);
Vue.component('notification', require('./components/notifications/Notification').default);
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
});