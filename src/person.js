"use strict";

class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {
        return(`Hello, my name is ${
            this.name
        } and I am ${
            this.age
        } years old. My interests are ${
            this.interests[0]
        }, ${
            this.interests[1]
        } and ${
            this.interests[2]
        }.`)
    }
}

// let greeting = Person.hello()


module.exports = Person;