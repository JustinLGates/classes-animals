export default class Animal {
  constructor(sound, name) {
    this.sound = sound;
    this.name = name;
  }
  makeSound() {
    console.log(this.sound);
  }
}
