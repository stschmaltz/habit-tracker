import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async addNewHabit() {
      const habit = {
        name: `test${Math.random()}`,
      };

      const newHabit = await this.store.createRecord('habit').randomize(name);

      const response = await newHabit.save();
      console.log(response);
      alert(`new habit: ${response.get('id')}`);
    },
  },
});
