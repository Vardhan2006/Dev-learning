# Basic Intro Questions

## 1. What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser using Google's V8 engine.

## 2. What is npm?

npm is the default package manager for Node.js used to install, manage, and update project dependencies, as well as run scripts defined in package.json.

## 3. Why do we need package.json?

package.json stores project metadata, dependencies, scripts, and configuration so the project can be managed and reproduced consistently across different environments.

## 4. What is the difference between dependencies and Dev Dependencies 

- Dependencies are runtime packages that the application needs while it is running in production. Dev dependencies are packages used during development, testing, linting, transpiling, or building the application, and are generally not needed in production.



# Interview Questions - Process Object

## 1. What is the `process` object in Node.js?

The `process` object is a built-in global object in Node.js that gives information about the currently running Node.js process.

We use it to:
- Read environment variables (`process.env`)
- Read command line arguments (`process.argv`)
- Exit the application (`process.exit()`)
- Listen for process events (`process.on()`)

---

## 2. Why do we use `process.env`?

We use `process.env` to read environment variables.

Instead of hard coding values like database URLs, API keys, passwords, or ports, we store them in environment variables and read them using `process.env`.

Example:

```ts
const PORT = Number(process.env.PORT ?? 3000);
```

If `PORT` exists, Node.js uses it. Otherwise, it uses `3000`.

---

## 3. What do we usually store in `process.env`?

We store values that can change between environments or should be kept secret.

Examples:
- Database URL
- API Keys
- JWT Secret
- Google OAuth Secret
- Port Number
- Environment (`NODE_ENV`)

Example:

```ts
const nodeEnv = process.env.NODE_ENV ?? "development";
```

---

## 4. Why do we convert `process.env.PORT` using `Number()`?

Because every value inside `process.env` is either a **string** or **undefined**.

Example:

```ts
const PORT = Number(process.env.PORT ?? 3000);
```

Without `Number()`, `PORT` would be a string instead of a number.

---

## 5. What is `process.argv`?

`process.argv` is a built-in property in Node.js that returns an array containing the command line arguments passed while starting the application.

Example:

```ts
const command = process.argv[2] ?? "start";
```

Here, `process.argv[2]` is the first custom argument because the first two values are reserved by Node.js.

---

## 6. What is `process.exit()`?

`process.exit()` immediately stops the Node.js application.

Example:

```ts
process.exit(1);
```

- Exit code `0` → Success
- Exit code `1` → Error or failure

## 7. Is .env the same as process.env?

Answer: No.

- .env is a file where we store environment variables.
process.env is a Node.js object that gives us access to those environment variables in our code.
- We usually use the dotenv package to load values from the .env file into process.env.

.env file -----> dotenv.config() -----> process.env -----> Your Node.js application

