import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCDqE8_iO_ntHpkTuHZdp-oNnGcPT9nlSE',
  authDomain: 'platzi-rooms-4e2e9.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-4e2e9.firebaseio.com',
  projectId: 'platzi-rooms-4e2e9',
  storageBucket: 'platzi-rooms-4e2e9.appspot.com',
  messagingSenderId: '546939725882',
  appId: '1:546939725882:web:f3936d61a2a243f8f8ad03',
  measurementId: 'G-ZWH5TMXEDT',
};
// Initialize Firebase
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
