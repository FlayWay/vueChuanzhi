<template>
  <div id="app">


    <myInput   @changeToP="changeToP"></myInput>
    <!--<Loading></Loading>-->

    <child :message='pro'></child>

    <div @click="btnAction">提示</div>
  </div>
</template>

<script>

  import child from './components/Children.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pro:"",
      num:'',
    }
  },
  methods:{

    btnAction(){

        console.log(11111,this.num,this.pro)
    },
    changeToP:function (data) {

        this.pro = data[1];
        this.num = data[0];
    }
  },

  components:{
      child
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
