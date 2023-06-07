setTimeout(() => {
  console.log("Hello World");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("Hello World");
}, 1000);
