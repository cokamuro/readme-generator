// import filename namespace
const fs = require('fs');

const writeToFile = (filename, data) => {
    // function to write text file, given a filename and the string contents
    fs.writeFile(filename, data, (err) => {
        if (err) console.log(err);
    });
};

const readTemplate = () => {
    // function to read the template readme from disk
    return fs.readFileSync("./template-readme.md", "utf8");
};

// export the methods of this file
module.exports = {
    writeToFile,
    readTemplate
};