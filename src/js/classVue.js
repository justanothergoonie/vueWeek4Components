Vue.component('button-counter', {
	data: function () {
		return {
			count: 0,
		};
	},
	template:
		'<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

Vue.component('toggle-button', {
	data: function () {
		return {
			on: true,
		};
	},
	template: `
            <button @click="on = !on">
                <span v-if="on">ON</span>
                <span v-else>OFF</span>
            </button>
            `,
});
