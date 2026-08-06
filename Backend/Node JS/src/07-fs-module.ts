/* 

fs - File System = It allows us to work with files and folders

It will help with
    - create folders
    - write files
    - read files
    - check file info
    - delete files

we have sync api: fs.readfilesync

 - callback apis
 - promise apis

 In latest porjects we use promise apis

*/

import path from "node:path";
import fs from "node:fs";

const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system', 'fs-demo')
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt')

type FileResult = {
    style: string;
    fileName: string;
    content: string;
    sizeInBytes: number;

}

function ensureDemoFolderExists(): void{
    if(!fs.existsSync(DEMO_FOLDER_PATH)) {
        fs.mkdirSync(DEMO_FOLDER_PATH, {recursive: true})
    }
}

function runSyncExample(): FileResult {
    
    // write content to a file
    fs.writeFileSync(SYNC_FILE_PATH, "created using sync fs", 'utf-8')

    fs.appendFileSync(SYNC_FILE_PATH, "Appended using sync fs", "utf-8")

    const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8")

    const stats = fs.statSync(SYNC_FILE_PATH)

    return {
        style: 'sync',
        content,
        fileName: path.basename(SYNC_FILE_PATH),
        sizeInBytes: stats.size
    }
}


async function main(): Promise<void> {
    try {

        ensureDemoFolderExists()
        const syncResult = runSyncExample()

        console.log(syncResult);
        

    } catch(error) {
        const message = error instanceof Error? error.message : "unkown error"
        console.error("file system error", message);
  
    }
}

main();