<template>
  <div id="app">


    <myInput  v-model="test" @changeToP="changeToP"></myInput>
    <Loading></Loading>


    <div @click="btnAction">错误</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pro:"",
      num:'',
      test:'',
    }
  },
  methods:{

    btnAction(){

        console.log(11111,this.pro,this.num)
        console.log(8888,this.test)
    },
    changeToP:function (data) {

        console.log(6666,data)
      this.pro = data[1];
        this.num = data[0];
        console.log(7777777,this.pro,this.num)

    }
  },
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
