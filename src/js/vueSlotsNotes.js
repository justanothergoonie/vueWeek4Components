//If you need to pass HTML to your components, use slots.
//If you need to pass data, use props.

Vue.component('todo-item', {
	template: `
            <div>
                <input type="checkbox" v-model="completed" />
                <span :class="{done: completed}">
                    <slot></slot>
                </span>    
                <slot name="description"></slot>
                <button>
                <slot name="button-text">Highlight</slot>
                </button>
            </div>
    `,
	data() {
		return {
			completed: false,
		};
	},
});
