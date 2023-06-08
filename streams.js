const fs = require("fs");

const readStream = fs.createReadStream("./text.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./new_text.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);

  writeStream.write(chunk);
});

//it can also be translated into a string by:
// const readStream = fs.createReadStream("./text.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
