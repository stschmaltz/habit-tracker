import Component from '@ember/component';

export default Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    async addNewHabit() {
      const newHabit = await this.store.createRecord('habit').randomize(name);

      const response = await newHabit.save();
      console.log(response);
      alert(`new habit: ${response.get('id')}`);
    },
  },
});
