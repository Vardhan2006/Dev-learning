## Node JS Introduction

- node js is javascript runtime environment (runtime is a environment where we run some code)
- In node javascript runs outside the browser (ex: running on our computer or a server)
- node js uses googles V8 engine The V8 engine. This compiles JavaScript into machine code and executes it.

- npm is node package manager this will help us install various packages, run project scripts, help using dependencies using package.json

V8 only executes JavaScript.

Node.js = V8 + Node APIs + Event Loop + libuv + other internal components.

## Why we need package.json

- Stores project metadata (name, version, description, author, license, etc.)
- Stores dependencies and devDependencies
- Stores scripts (start, dev, test, build, etc.)
- Defines project configuration (such as module type)
- if a new developer joins the team he can see the package.json and gets the most of the knowledge about the project

## What is dependencies and Dev Dependencies  

- Dependencies are runtime packages that the application needs while it is running in production. Dev dependencies are packages used during development, testing, linting, transpiling, or building the application, and are generally not needed in production.

