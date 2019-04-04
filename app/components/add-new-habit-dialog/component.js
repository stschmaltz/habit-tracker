import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),

  init() {
    this._super(...arguments);

    this.frequencies = this.frequencies || [1, 2, 3, 4, 5, 6, 7];
    this.colors = this.colors || [
      "red ",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deep-orange",
      "brown",
      "grey",
      "blue-grey"
    ];
  },
  habitName: "",
  habitFrequency: null,
  habitColor: null,
  actions: {
    async addHabit() {
      const habitName = this.get("habitName");
      const frequency = this.get("habitFrequency");
      const color = this.get("habitColor");
      console.log(habitName, frequency, color);
      const newHabit = this.store.createRecord("habit", {
        name: habitName.charAt(0).toUpperCase() + habitName.slice(1),
        frequency: frequency,
        color: color
      });
      const response = await newHabit.save();
      console.log(response);
    },
    cancel() {
      this.onClose();
    }
  }
});
