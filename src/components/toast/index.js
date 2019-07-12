import ToastComponent from "./toast.vue"
const Toast = {}

//注册Toast
Toast.install = function (Vue) {
  //生成一个Vue的子类
  //同时这个子类也就是组件
  const ToastConstructor = Vue.extend(ToastComponent)

  //生成一个改子类的实类
  const instance = new ToastConstructor();

  //将这个实例挂载载创建的div上
  //并将此div加入全局挂载点的内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  Vue.prototype.$toast = (msg, title = '提示') => {
    instance.message = msg;
    instance.show = true;
    instance.title = title;

    // setTimeout(() => {
    //   instance.show = false;
    // }, duration)
  }
}
export default Toast
