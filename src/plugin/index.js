import Toast from '@/components/Toast.vue'

export default {
  install(Vue,options){
    let currentToast ;
    Vue.prototype.$toast = function(message,toaseOptions){
      if(currentToast){currentToast.close()}//如果有Toast就删除上一个
      currentToast =  createToast({Vue,propsData:toaseOptions,message})
    }
  }
}

function createToast({Vue,propsData,message}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

