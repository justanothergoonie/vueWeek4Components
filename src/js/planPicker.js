let PlanPickerItemComponent = {
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
        <PlanPickerItem v-for="plan in plans" :name="plan" @select="selectPlan" :selected-plan="selectedPlan"></PlanPickerItem>
    </div>
    `,
	components: {
		PlanPickerItem: PlanPickerItemComponent,
	},
	data() {
		return {
			plans: [
				'the hacker',
				'the wacker',
				'the lacker',
				'the packer',
				'the cackler',
			],
			selectedPlan: null,
		};
	},
	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan;
		},
	},
};
