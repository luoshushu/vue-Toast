<template>
  <div id="app">
    <!-- <button @click="clickToast1">点击啦top</button>
      <button @click="clickToast2">点击啦middle</button>
      <button @click="clickToast3">点击啦bottom</button> -->
    <button @click="xxx">点击</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      xxx() {
        this.$toast('我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖我是苏宋霖',{
            closeButton:{
            text:'知道了',
            callback(){
              console.log('苏宋霖点击知道了');
            }
          }
        })
      },
      clickToast1() {
        this.clickToast('top')
      },
      clickToast2() {
        this.clickToast('middle')
      },
      clickToast3() {
        this.clickToast('bottom')
      },
      clickToast(position) {
        // this.$toast(`操作成功！！  ${parseInt(Math.random()*100) }`,{
        this.$toast(`操作成功！！！`, {
          position,
          enableHtml: false,
          closeButton: {
            text: '知道了',
            callback() {
              console.log('回调');
            }
          },
          autoClose: 3,
        })
      }
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
