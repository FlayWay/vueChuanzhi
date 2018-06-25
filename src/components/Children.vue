<template>
    <div>
        子组件{{message}}
    </div>
</template>

<script>

  export default {

      data(){

          return {
            message:''
          }
      },

    props:{
        message:String
      }
  }

</script>

<style>

</style>
