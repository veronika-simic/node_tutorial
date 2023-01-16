// reading files
const fs = require("fs");

/* this is asynchronous and does not block our code */
fs.readFile("./files/textFile.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  /* This will give us a Buffer which is a data package */
  console.log(data.toString());
});

// Since readfile is async this is loged first
console.log("last line");

//write files or rewrite them
// if the file does not exist it will create it for us

fs.writeFile("./files/textFile.txt", "hello everyone", (error, data) => {
  if (error) {
    console.log(error);
  }
});

// directories
fs.mkdir('./assets', (error) => {
    if(error) {
        console.log(error)
    }
    console.log('folder created')
})

// deleting
if (fs.existsSync('./assets')) {
    fs.unlink('./assets', (error) => {
        if (error) {
            console.log(error)
        }
        console.log('File delted')
    })
}