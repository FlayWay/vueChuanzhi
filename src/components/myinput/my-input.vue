<template>
    <div>
      <select v-model="ceshi" @change="changed">
        <option selected="true">浙</option>
        <option>上</option>
      </select>
      <input type="text" v-model="num" ref="input"  @input="changed">
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
//            this.$emit('input', this.num,this.ceshi)
            this.$emit('changeToP', this.num,this.ceshi)
          }
    }
  }

</script>

<style>

</style>
