import { error } from "node:console";
import { promises } from "node:dns";

type User = {
    id: number;
    name: string;
    role: "user" | "super-admin";
};

const users: User[] = [
    {
        id: 1,
        name: "Vardhan",
        role: "super-admin"
    },
    {
        id: 2,
        name: "Mosh",
        role: "user"
    },
    {
        id: 3,
        name: "John",
        role: "user"
    }
];

/*
A callback is a function passed as an argument to another function.

Classic Node.js callback pattern:
callback(error, result)
*/

function findUserWithCallback(
    userId: number,
    callback: (error: Error | null, user?: User)=> void
): void {
    setTimeout(()=>{
        const user = users.find(currentUser => currentUser.id === userId)

        if (!user) {
           return callback(new Error(`user with id ${userId} was not found`))
            
        }

        callback(null, user)
    }, 1000)
}

findUserWithCallback(100, (error, user) => {
    if(error) {
        console.log("callback Error", error.message);
        return;
    }

    console.log("callback result", user?.id, user?.name, user?.role);
    
})


/*

This whole example is simulating an asynchronous database query using setTimeout(). After the "database" finishes searching, it calls back the function you passed with either:

callback(error, undefined) if something went wrong, or
callback(null, user) if the operation was successful.

That callback(error, result) pattern is one of the most common patterns you'll see in older Node.js codebases.


*/


function findUserWithPromise(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const user = users.find((currentUser) => currentUser.id === userId)

            if (!user) {
                return reject(new Error(`user with id ${userId} is not found`))
                
            }

            resolve(user)
        })
    })
}

findUserWithPromise(100)
    .then((user) => {
        console.log("Promise Result: ", user?.id, user?.name, user?.role);
    })
    .catch((error: Error) => {
        console.log("Promise Error: ", error.message);
    })


async function findUserWithAsyncAwait(userId: number): Promise<void> {
    try {
        const user = await findUserWithPromise(userId);
        console.log('async/await', user.name);
        
    } catch (error) {
        const message = error instanceof Error ? error.message : 'unknow error'
        console.log("async/await error", message);
        
    }
}

findUserWithAsyncAwait(1)