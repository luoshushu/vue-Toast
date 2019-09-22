<template>
  <div id="app">
    <button @click="xxx1">点击 上</button>
    <button @click="xxx2">点击 中</button>
    <button @click="xxx3">点击 下</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      xxx1(){
        this.xxx('top')
      },
      xxx2(){
         this.xxx('middle')
      },
      xxx3(){
         this.xxx('bottom')
      },
      xxx(position) {
        this.$toast('我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖',{
          position,
            closeButton:{
            text:'知道了',
            callback(){
              console.log('苏宋霖点击知道了');
            }
          }
        })
      },
    
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
