// In system when we say line by line execution only one tasks can be processed like if we have 4 console logs only i will be executed at a time

// example (For the basic example the became too complex)

function checkInventory(callback) {

    setTimeout(() => {
        console.log("checking the inventory...");
        callback()
    }, 5000);

}

function createOrder(callback) {
    setTimeout(() => {
        console.log("creating the order...");
        callback()
    }, 3000);
}

function chargePayment(callback) {
    setTimeout(() => {
        console.log("Charging the payment...");
        const error = new Error("Payment Failed");

        console.log(error);
        
        callback()
    }, 2000);

}

function sendInvoice(callback) {
    setTimeout(() => {
        console.log("sending the invoice...");
        callback()
    }, 1000);
}

function main() {

    // Callback Hell

    checkInventory(() => {
        createOrder(() => {
            chargePayment((error) => {

                if (error) {
                    console.log(error); // error handling
                    return;
                }

                sendInvoice(() => {
                    console.log("Order Completed");
                });
            });
        });
    });

}

main();


// if we use promises we can make it veryy much readable

/*

promise is a feature or class in JS we use it when we dont know when we get the re
response so we use it and like tell me once the work is done or notify once its done

*/

