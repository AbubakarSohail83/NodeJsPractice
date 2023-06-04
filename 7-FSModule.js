const path=require('path');


//returns platform specific separator

console.log(path.sep);

//normalizes and combines folders, returns path as output

let filePath=path.join('/content','subfolder','test.txt');

console.log(filePath)

//returns the base name of the path

let baseName=path.basename(filePath)

console.log(baseName)



//__dirname is a global variable having current directory name,,,, .resolve method gives the absolute path from current directory to the stated file and folder 
let absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);


