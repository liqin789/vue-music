// Vue.directive('focus', {
//   inserted: function (el) {
//     el.focus()
//   }
// })
export default {
  "focus": { //获取焦点的指令
    inserted(el) {
      el.focus()
    }
  },
  'drag': { //元素的拖拽指令
    inserted: function (el) {
      el.onmousedown = function (ev) {
        var disX = ev.clientX - el.offsetLeft;
        var disY = ev.clientY - el.offsetTop;
        document.onmousemove = function (ev) {
          var l = ev.clientX - disX;
          var t = ev.clientY - disY;
          el.style.left = l + 'px';
          el.style.top = t + 'px';
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;

        };
      };
    }
  },
}
