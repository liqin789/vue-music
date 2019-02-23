/*
 * @Author: liqin
 * @Description: 混入的使用 公共的数据或者方法 在export default中的所有的内容都可以写到混入的对象中
 * @Date: 2019-02-23 16:30:35
 */
const myMixin = {
  data() {
    return {
      isNoData: false, // 列表数据是否是空
      isShowLoading: true, //是否是显示正在加载的状态
    }
  },
  method: {
    /**
     * @description: 在每个单页面中获得列表的数据
     * @param {type} *
     * @return: *
     */
    getData() {

    }
  }
}

export default myMixin
