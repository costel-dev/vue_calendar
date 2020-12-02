import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize  from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxvZDYEiQLw1FYFIKEojK8dXzQxWiY08s",
  authDomain: "vue-calendar-a915d.firebaseapp.com",
  databaseURL: "https://vue-calendar-a915d.firebaseio.com",
  projectId: "vue-calendar-a915d",
  storageBucket: "vue-calendar-a915d.appspot.com",
  messagingSenderId: "1011366733158",
  appId: "1:1011366733158:web:d9425b45231ffce85f54a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
