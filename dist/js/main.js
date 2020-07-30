"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files."); // Vue.component('click-counter', {
// 	template: `#click-counter-template`,
// 	data() {
// 		return {
// 			count: 0,
// 		};
// 	},
// });
// Vue.component('button-counter', {
// 	data: function () {
// 		return {
// 			count: 0,
// 		};
// 	},
// 	template:
// 		'<button v-on:click="count++">You clicked me {{ count }} times.</button>',
// });
// Vue.component('toggle-button', {
// 	data: function () {
// 		return {
// 			on: true,
// 		};
// 	},
// 	template: `
//             <button @click="on = !on">
//                 <span v-if="on">ON</span>
//                 <span v-else>OFF</span>
//             </button>
//             `,
// });
// Vue.component('blog-post', {
// 	props: ['title'],
// 	template: '<h3>{{ title }}</h3>',
// });

var PlanComponent = {
  template: "\n        <div @click=\"select\" class=\"plan\" :class=\"{'active-plan' : isSelected}\">\n            <div class=\"description\">\n                <span class=\"title\">\n                    {{name}}\n                </span>\n            </div>\n        </div>\n    ",
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected: function isSelected() {
      return this.name === this.selectedPlan;
    }
  },
  methods: {
    select: function select() {
      this.$emit('select', this.name);
    }
  }
};
var PlanPickerComponent = {
  template: "\n    <div class=plans>\n        <plan v-for=\"plan in plans\" :name=\"plan\" @select=\"selectPlan\" :selected-plan=\"selectedPlan\"></plan>\n    </div>\n    ",
  components: {
    plan: PlanComponent
  },
  data: function data() {
    return {
      plans: ['the hacker', 'the wacker', 'the lacker', 'the packer'],
      selectedPlan: null
    };
  },
  methods: {
    selectedPlan: function selectedPlan(plan) {
      this.selectedPlan = plan;
    }
  }
};
var app = new Vue({
  el: '#app',
  components: {
    PlanPicker: PlanPickerComponent
  }
});
//# sourceMappingURL=main.js.map
