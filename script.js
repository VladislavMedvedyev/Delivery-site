const app = {
	data() {
		return {
            monthlyButton: 'active',
            yearlyButton: 'non-active',
            yearlyPrice: true,
            monthlyPrice: false,
            faqItems: [0, 1, 2, 3, 4],
		}
	},

	methods: {
        changePrice() {
            if (this.monthlyButton === 'non-active') {
                this.monthlyButton = 'active';
                this.yearlyButton = 'non-active';
                this.yearlyPrice = true;
                this.monthlyPrice = false;
            } else if (this.monthlyButton === 'active') {
                this.monthlyButton = 'non-active';
                this.yearlyButton = 'active';
                this.yearlyPrice = false;
                this.monthlyPrice = true;
            }
        },

        showItem(index) {
            const togglerShowEl = document.getElementById(index + `plus`);
            const togglerHideEl = document.getElementById(index + `minus`);
            const textEl = document.getElementById(index + `text`);
            togglerShowEl.classList.toggle('hidden');
            togglerShowEl.classList.toggle('questions__questions-item_toggler');
            togglerHideEl.classList.toggle('hidden');
            togglerHideEl.classList.toggle('questions__questions-item_toggler');
            textEl.classList.toggle('hidden');
            textEl.classList.toggle('questions-item__text');
        },
	}
}

Vue.createApp(app).mount('#app');
