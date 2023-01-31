// const burger = new Promise(function (resolve, reject) {
//   // try {
//   //   setTimeout(function () {
//   //     resolve("promise fulfilled");
//   //   }, 10000);
//   // } catch {
//   setTimeout(function () {
//     reject("Could not perform computation");
//   }, 5000);
// });
// console.log(burger);

const promiseGreeting = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan !";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

console.log("Greetings Start");

promiseGreeting
  .then((greeting) => console.log(greeting))
  .catch((err) => console.log(err));

console.log("Greetings End");
