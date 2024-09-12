class $atlz_lom_button extends $atlz_lom_view {
	dom_name() {
		return 'button'
	}

	title() {
		return ''
	}

	click(e: Event) {}

	sub() {
		return [this.title()]
	}

	event() {
		return {
			click: (e: Event) => this.click(e),
		}
	}
}

class $atlz_lom_button_minor extends $atlz_lom_button {
	attr() {
		return {
			atlz_counter_button_minor: true,
		}
	}
}
