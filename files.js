const fs = require("fs");

//reading files
fs.readFile("./ejr.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//writing files
fs.writeFile("./ejr.txt", "hello world , you are welcome", () => {
  console.log("File has been over-written");
});

fs.writeFile("./eminem.txt", "THE GOAT", () => {
  console.log("New File has been created");
});

//directories
if (fs.existsSync("./jimmy.txt")) {
  return;
}

fs.mkdir("./jimmy.txt", (err) => {
  if (err) {
    console.log("Failed to create");
  }

  console.log("File has been created");
});

//deleting files
if (fs.existsSync("./jimmy.txt")) {
  fs.unlink("./jimmy.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File has been deleted");
  });
}
