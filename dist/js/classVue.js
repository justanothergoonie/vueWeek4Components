"use strict";

Vue.component('button-counter', {
  data: function data() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
Vue.component('toggle-button', {
  data: function data() {
    return {
      on: true
    };
  },
  template: "\n            <button @click=\"on = !on\">\n                <span v-if=\"on\">ON</span>\n                <span v-else>OFF</span>\n            </button>\n            "
});
//# sourceMappingURL=classVue.js.map
