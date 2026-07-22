// In backend project we read backend code from env file
// read secrets - db urls, api keys, password, google auth secret
// read CLI arguments in scripts

import process from "node:process";

const nodeEnv = process.env.NODE_ENV ?? "development"

const port = 3000 // Bad practice to hard code the env values

// process.env values are always string or undefined

// example if i want to read the value of port we have to do is 

const PORT = Number(process.env.PORT ?? 3000)
