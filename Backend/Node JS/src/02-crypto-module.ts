/*It is a built in node js module. Mostly used in security
related tasks like creating secure tokens, verifications like dats is changed or not 
changed for encrypt and decrypt and hashing the data.
*/

import crypto, { createHmac } from "node:crypto";
import { create } from "node:domain";

// crypto.randomUUID (universally unique identifier)

const requestId = crypto.randomUUID();

console.log(requestId);

/*
 * crypto.randomBytes()
 
 * Used to generate cryptographically secure random bytes.
 *
 * Common Use Cases:
 * - Password reset tokens
 * - Email verification tokens
 * - Session secrets
 * - API keys
 * - CSRF tokens
 * - Random salts for password hashing
 * - Secure authentication tokens
 */

const resetToken = crypto.randomBytes(16).toString("hex"); // we will convert this 16 bytes in HEX format so 1 byte will becomes 2 character string when we convert it into hex format means for 16 bytes will convert to 32 hex characters.

console.log(resetToken);


/*


randomBytes(16)
        │
        ▼
16 random bytes
        │
        ▼
Buffer object
        │
        ▼
using toString("hex")
        │
        ▼
8b4ae78c44afe017a47bef892f6f151a (string instead of buffer object)      


C:\Codes\Dev-learning\Backend\Node JS>npm run 02

> backend@1.0.0 02
> tsx src/02-crypto-module.ts

102e20b5-e770-4ac0-b8a2-f3ba1ba3e539
<Buffer 8b 4a e7 8c 44 af e0 17 a4 7b ef 89 2f 6f 15 1a>


C:\Codes\Dev-learning\Backend\Node JS>npm run 02

> backend@1.0.0 02
> tsx src/02-crypto-module.ts

07049062-29cc-41ba-9ab4-9cc90668758b
4e309c13891191cb6dc72b7f227d0e9a

*/





// crypto.createHash (it will conevert the data into fixed length string)

/*means, hashing is a one-way function, 
meaning you cannot reverse a hash output back 
into your original input.
 ex: hello --> Hash (possible)
     Hash --> hello (not possible)

*/

const text = "hellow world";
const hash = crypto.createHash('SHA256').update('text').digest('hex');

console.log(hash); // 982d9e3eb996f559e633f4d194def3761d909f5a3b647d1a851fead67c32c9d1



// crypto.createHmac

/*

normal hash: data --> hash

HMAC: data + secret --> signed hash

common uses cases: webhook, signed tokens

*/

const secret = "my-secret-key"
const message = "user_id = 01"

const signature = crypto
    .createHmac("SHA256", secret)
    .update(message)
    .digest('hex')

console.log(signature); // da4b878bdd324f6533d8e7b9a436e51bc0af5bf966c00598a59594dd1de49c5d


// verifying the signature

const signatureVerify = crypto
    .createHmac('SHA256', secret)
    .update(message)
    .digest('hex')

console.log("Signature is valid and matching", signature === signatureVerify); // Signature is valid and matching true

