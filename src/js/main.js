console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

// Vue.component('click-counter', {
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

let PlanComponent = {
	template: `
        <div @click="select" class="plan" :class="{'active-plan' : isSelected}">
            <div class="description">
                <span class="title">
                    {{name}}
                </span>
            </div>
        </div>
    `,
	props: {
		name: {
			type: String,
			required: true,
		},
		selectedPlan: {
			type: String,
		},
	},
	computed: {
		isSelected() {
			return this.name === this.selectedPlan;
		},
	},
	methods: {
		select() {
			this.$emit('select', this.name);
		},
	},
};

let PlanPickerComponent = {
	template: `
    <div class=plans>
        <plan v-for="plan in plans" :name="plan" @select="selectPlan" :selected-plan="selectedPlan"></plan>
    </div>
    `,
	components: {
		plan: PlanComponent,
	},
	data() {
		return {
			plans: ['the hacker', 'the wacker', 'the lacker', 'the packer'],
			selectedPlan: null,
		};
	},
	methods: {
		selectedPlan(plan) {
			this.selectedPlan = plan;
		},
	},
};

var app = new Vue({
	el: '#app',
	components: {
		PlanPicker: PlanPickerComponent,
	},
});
