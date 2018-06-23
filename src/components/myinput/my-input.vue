<template>
    <div>
      <select v-model="ceshi" @change="changed">
        <option selected="true">浙</option>
        <option>沪</option>
      </select>
      <input type="text" v-model="num"  @input="changed">
      <input type="button" value="点击">
    </div>
</template>

<script type="text/ecmascript-6">

  export default {

      data(){
          return {
              num:'',
              ceshi:'浙',
          }
      },
    watch:{
          num:function (val) {
              this.num = val.toUpperCase()
          }
    },

    methods:{
      changed(){
            console.log(222,this.ceshi,this.num)
            this.$emit('changeToP', [this.ceshi,this.num.toUpperCase()])
          }
    }
  }

</script>

<style>

</style>
