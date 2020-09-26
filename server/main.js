import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name='John Doe', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title){
      super(name, age);
      this.title = title;
    }
    hasJob() {
      return !!this.title;
    }
    getGreeting() {
      if(this.title) {
        return `Hi! I am ${this.name}. I work as a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }
  }

  let me = new Person('Andrew', 13, "db admin");
  console.log(me.getPersonDescription());
});