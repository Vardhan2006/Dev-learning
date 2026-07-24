// In backend project we read backend code from env file
// read secrets - db urls, api keys, password, google auth secret
// read CLI arguments in scripts

import process from "node:process";

const nodeEnv = process.env.NODE_ENV ?? "development"

const port = 3000 // Bad practice to hard code the env values

// process.env values are always string or undefined

// example if i want to read the value of port we have to do this instead of hard coding it..

const PORT = Number(process.env.PORT ?? 3000)

// process.argv ia a built in property in node js that returrns an array containing the comand line arguments passed when launching the node js process

// process.argv[2] is specifically the first custom rgument you pass to your script because the first two in the array are always reserved by node js

/*
process.argv ->

[                        // reserved by node js 
    "path/to/node",
                        // reserved by node js 
    "Backend\Node JS\src\01-process-object.ts",
    "start"
]

process.argv[2] */

const command = process.argv[2] ?? "start";

// fail flag
// crash flag

const shouldFail = process.argv.includes("--fail")
const shouldCrash = process.argv.includes("--crash")

// Do not start async here because node is already shutting down here istead we can use exit for example where to check for final log or final cleaup 

process.on("exit", (code)=>{
    console.log(`process finished with exit code ${code}`);   
});


function runApp(): void {
    console.log(command);

    if (shouldFail) {
        console.error("Manual failure triggered with --fail flag");
        process.exit(1);
    }

    if (shouldCrash) {
        console.error("Manual crash triggered with --crash flag");
        process.exit(1);
    }
}

runApp();

/*

C:\Codes\Dev-learning\Backend\Node JS>npm run 01 -- start --fail

> backend@1.0.0 01
> tsx src/01-process-object.ts start --fail

start
Manual failure triggered with --fail flag
process finished with exit code 1

C:\Codes\Dev-learning\Backend\Node JS>npm run 01 -- start --crash

> backend@1.0.0 01
> tsx src/01-process-object.ts start --crash

start
Manual crash triggered with --crash flag
process finished with exit code 1

*/