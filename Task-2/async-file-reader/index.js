/* 
//to print the content of each file


const fs = require("fs/promises");
const printContent = async () => {
  try {
    const response = await fs.readFile("a.txt", "utf-8");
    const response2 = await fs.readFile("b.txt", "utf-8");
    const response3 = await fs.readFile("c.txt", "utf-8");

    console.log(response);
    console.log(response2);
    console.log(response3);
  } catch (error) {
    console.error("Error occured:", error.message);
  }
};

printContent(); */

// Or optionally we can use Promise.all to read all files concurrently to print their file

const fs = require("fs/promises");
const filesHolder = ["a.txt", "b.txt", "c.txt"];

const printContentAll = async () => {
  try {
    const promises = filesHolder.map((x) => fs.readFile(x, "utf-8")); // transform each of file to content
    const responses = await Promise.all(promises);
    responses.forEach((response) => console.log(response)); // iterate each response and print to the console
  } catch (err) {
    console.log("Error occurred:", err.message);
  }
};

printContentAll();

// to print total numbers of characters in for 3 files added

const TotalNumberOfCharacters = async () => {
  try {
    const promises = filesHolder.map((file) => fs.readFile(file, "utf-8"));
    const responses = await Promise.all(promises);
    const totalChars = responses.reduce(
      (acc, content) => acc + content.length,
      0
    );
    console.log("🧮 Total number of characters:", totalChars);
  } catch (err) {
    console.log("Error occurred:", err.message);
  }
};
TotalNumberOfCharacters();
