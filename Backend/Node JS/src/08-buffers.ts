// buffers - when ever we work with raw binary data we use buffers

import { toString } from "node:ffi";
import { buffer } from "node:stream/consumers";

// binary data means - when our data is stored in bytes

/* some applications where buffers are used

- reading files
- receiving http req bodies
- working with streams
- handling images, pdf files and videos
- encrypt and hashing

*/

const textBuffer =Buffer.from("Node") // this normal test will convert to bytes in hexadecimal format

console.log(textBuffer);

// to convert to string we use toString

console.log(textBuffer.toString('utf-8'));

const engBuffer = Buffer.from("LUCKY")
console.log(engBuffer.length);

const fixedBuffer = Buffer.alloc(7);
console.log("Fixed buffer before write", fixedBuffer);

fixedBuffer.write("DANGERS")

console.log("Fixed buffer after write", fixedBuffer);
console.log("fixed buffer as a text", fixedBuffer.toString('utf-8'));


// some times we have chunks so we need to combine that

const chunks = [
    Buffer.from("Hellow "),
    Buffer.from("BROO "),
    Buffer.from("HRU ")
]

const combineBuffers = Buffer.concat(chunks);

console.log(combineBuffers, combineBuffers.toString('utf-8'));

/* Output

<Buffer 4e 6f 64 65>
Node
5
Fixed buffer before write <Buffer 00 00 00 00 00 00 00>
Fixed buffer after write <Buffer 44 41 4e 47 45 52 53>
fixed buffer as a text DANGERS
<Buffer 48 65 6c 6c 6f 77 20 42 52 4f 4f 20 48 52 55 20> Hellow BROO HRU 

*/