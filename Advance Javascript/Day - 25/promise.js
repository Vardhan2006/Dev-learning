// if we use promises we can make it veryy much readable

/*

promise is a feature or class in JS we use it when we dont know when we get the re
response so we use it and like tell me once the work is done or notify once its

*/

function checkInventory() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("checking the inventory...");

            // to maintain the order we use resolve and reject

            resolve();
        }, 5000);
    })

    return promise;

}

function createOrder() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("creating the order...");

            let inStock = 5;
            resolve(inStock);
        }, 3000);
    })

    return promise;
}

function chargePayment() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Charging the payment...");
            
            reject(new Error('Payment Failed'));
        }, 2000);
    })

    return promise;

}

function sendInvoice() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("sending the invoice...");
            resolve();
        }, 1000);
    })

    return promise;
}

async function main() {

    const inStock = await checkInventory();
    console.log("inStock", inStock);
    
    await createOrder();
    await chargePayment();
    await sendInvoice();






    /*
    same code but promise
    checkInventory()
        .then(createOrder)
        .then(chargePayment)
        .catch((err) => {
            console.log('err', err);    // if this happens many times it gets same like callback hell so instead we can use asyn/await
        })
        .then(sendInvoice)*/

}

main();



/*

In thread when we use await the above functions will move aside or offload
from the thread and waits similarly happens for all like create, payment and all

so they all wait other place instead of thread and will in the order which is written
in physically. so it waits outside of the thread and no code will be excuted before
the first one like here checkinventory gets executes

*/

