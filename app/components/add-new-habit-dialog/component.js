import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);

    this.frequencies = this.frequencies || [1, 2, 3, 4, 5, 6, 7];
    this.colors = this.colors || [
      "red",
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
    addHabit(habit) {
      const habitName = this.get("habitName");
      const freq = this.get("habitFrequency");
      console.log(habitName, freq);
    },
    cancel() {
      this.onClose();
    }
  }
});
