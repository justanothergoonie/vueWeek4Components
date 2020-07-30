"use strict";

var PlanPickerItemComponent = {
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
  template: "\n    <div class=plans>\n        <PlanPickerItem v-for=\"plan in plans\" :name=\"plan\" @select=\"selectPlan\" :selected-plan=\"selectedPlan\"></PlanPickerItem>\n    </div>\n    ",
  components: {
    PlanPickerItem: PlanPickerItemComponent
  },
  data: function data() {
    return {
      plans: ['the hacker', 'the wacker', 'the lacker', 'the packer', 'the cackler'],
      selectedPlan: null
    };
  },
  methods: {
    selectPlan: function selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
};
//# sourceMappingURL=planPicker.js.map
