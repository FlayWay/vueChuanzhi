import Vue from 'vue'
import App from './App.vue'
import Loading from  './components/index.js'
import Myinput from  './components/myinput/index.js'


console.log(Myinput)
Vue.use(Myinput)
Vue.use(Loading)


new Vue({
  el: '#app',
  render: h => h(App)
})
