/*

It will help us to build and read file paths

*/

import { profile } from "node:console";
import path from "node:path";

// const filePath = projectRoot + "/uploads" + filename (this is bad practice)



// path.join

/*path.join : uses the corret 
separator for the current OS

example: " '/' for mac "
         " '\' for windows" 

    mac: /users/vardhan/project
    windows: c:\users\vardhan\project

*/



// process.cwd: the folder from where the node js process was started the "current working directory"


const projectRoot = process.cwd();

console.log(projectRoot); // C:\Codes\Dev-learning\Backend\Node JS


// example: \uploads\users\42\profile.photo.png

const userId = "42"
const originalName = "profile.photo.png"

const uploadFilePath = path.join(
    projectRoot,
    "uploads",
    "users",
    userId,
    originalName,
)

console.log(uploadFilePath); // C:\Codes\Dev-learning\Backend\Node JS\uploads\users\42\profile.photo.png

/*

imp -> path.join -> creates a path string
It will not create a folder
It does not check where the file exists or not

*/


/*

const path = require('node:path'); // Import the core path module

// 1. Get the full filename
console.log(path.basename('/users/admin/documents/report.pdf')); 
// Output: 'report.pdf'

*/


/*

const path = require('node:path');

// 1. Standard file with an extension
console.log(path.extname('/src/components/Button.jsx')); 
// Output: '.jsx'

*/