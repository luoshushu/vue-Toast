import Toast from '@/components/Toast.vue'
export default {
  install(Vue,options){
    Vue.prototype.$toast = function(message,toaseOptions){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:toaseOptions
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}



