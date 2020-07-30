"use strict";

//If you need to pass HTML to your components, use slots.
//If you need to pass data, use props.
Vue.component('todo-item', {
  template: "\n            <div>\n                <input type=\"checkbox\" v-model=\"completed\" />\n                <span :class=\"{done: completed}\">\n                    <slot></slot>\n                </span>    \n                <slot name=\"description\"></slot>\n                <button>\n                <slot name=\"button-text\">Highlight</slot>\n                </button>\n            </div>\n    ",
  data: function data() {
    return {
      completed: false
    };
  }
});
//# sourceMappingURL=vueSlotsNotes.js.map
