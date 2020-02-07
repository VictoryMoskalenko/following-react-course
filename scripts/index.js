const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 1000)
});

console.log(promise);
promise
  .then(x => {
    console.log(x);
    return x;
})
  .then(y => console.log(y));

  promise.then(z => console.log(z));