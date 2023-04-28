"use strict";
class Person {
    constructor() {
        this.name = "";
    }
}
const p = new Person();
p.name = "sai";
console.log(p);
class student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const st = new student("krishna");
console.log(st);
