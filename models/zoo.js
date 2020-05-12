import Animal from "./animal.js";

let state = {
  animalTotal: 0,
  zookeepers: 0,
  upkeepCost: 0,
  animals: {
    cow: new Animal("moo", "milkdud"),
    duck: new Animal("quack", "quacky"),
    chicken: new Animal("cluck", "mcchicken"),
    goat: new Animal("baa", "gruff"),
    sealion: new Animal("arf", "clouse"),
    tiger: new Animal("roar", "mr-t"),
  },
};
export default class Zoo {
  /**
   *
   * @param {string} animal
   */
  makeSound(animal) {
    state.animals[animal].makeSound();
  }
}
