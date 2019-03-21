import Component from "@ember/component";

export default Component.extend({
  habitName: "",
  frequency: 0,

  actions: {
    addHabit(habit) {
      console.log(habit);
    },
    cancel() {
      this.onClose();
    }
  }
});
