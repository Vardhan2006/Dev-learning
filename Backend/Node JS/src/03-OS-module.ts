/*

use case of this module: 
    - Check OS
    - check CPU info
    - check Memory info
    - some times checking the home/temp dir

*/

import * as os from "node:os"

function runOsDemo(): void {
    console.log('platform', os.platform());
    console.log("architecture", os.arch());
    console.log("OS Type", os.type());
    console.log("OS release", os.release());


    const cpus = os.cpus()
    console.log(cpus.length);
   
    if(cpus.length > 0) {
        console.log("first CPU Model", cpus[0].speed, cpus[0].model, cpus[0].times);
        
    }

    console.log(os.totalmem(), os.freemem()); // 16831889408 6566293504
    
        
}

runOsDemo()


/* output

C:\Codes\Dev-learning\Backend\Node JS>npm run 03

> backend@1.0.0 03
> tsx src/03-OS-module.ts

platform win32
architecture x64
OS Type Windows_NT
OS release 10.0.26200
12
first CPU Model 2496 12th Gen Intel(R) Core(TM) i5-12450H { user: 3463015, nice: 0, sys: 5054312, idle: 68179015, irq: 1162937 }

*/


