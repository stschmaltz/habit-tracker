import DS from "ember-data";
import Faker from "faker";

export default DS.Model.extend({
  
  name: DS.attr("string"),
  frequency: DS.attr("number"),
  color: DS.attr("string"),
  randomize() {
    this.set("name", Faker.hacker.ingverb());
    return this;
  }
});
