import Vue from "Vue";
Vue.directive("m", {
  bind: function(el, binging) {
    el.textContent = Math.pow(binging.value, 4);
  },
  update: function(el, binging) {
    el.textContent = Math.pow(binging.value, 4);
  }
});
