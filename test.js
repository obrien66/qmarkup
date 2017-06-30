var q = require("./index")

// test tag and text
console.log(q("h1").build("hello world"))
// test single id or class
console.log(q("p").build("class test", ".class-test"))
console.log(q("p").build("id test", "#id-test"))
// multiple ids and classes
console.log(q("p").build("multiple classes and ids", [".class-one", "#id-one", ".class-two", "#id-two"]))