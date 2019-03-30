import ImgComponent from "./Img.vue"
const Img = {}
Img.install = (Vue) => {
  Vue.component('Img', ImgComponent)
}

export default Img
