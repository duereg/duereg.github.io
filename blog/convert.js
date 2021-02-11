const fs = require("fs");
const _  = require('lodash');

const OLD_COMMENT_BLOCK = "```";
const NEW_COMMENT_BLOCK = "+++";

processMarkdownFilesInDirectory('./');

async function processMarkdownFilesInDirectory(path) {
    const directory = await fs.promises.opendir(path);
    for await (const fileHandle of directory) {
        console.log(fileHandle.name);
        const fileContents = await fs.promises.readFile(path + fileHandle.name, 'utf-8');
        const fileContentsArray = fileContents.split('\n');
        let hasComment = false;
        let lineNum = 0;

        for(let i = 0; i < fileContentsArray.length; i++) {
            const fileLine = fileContentsArray[i];

            if (fileLine === OLD_COMMENT_BLOCK) {
                fileContentsArray[i] = fileLine.replace(OLD_COMMENT_BLOCK, NEW_COMMENT_BLOCK);

                if(!hasComment) {
                    console.log('in comment', lineNum);
                    hasComment = true;
                } else {
                    console.log('out of comment', lineNum);
                    break;
                }
            }

            if (fileLine.includes(": ")) {
                const locOfColon = fileLine.indexOf(": ");
                const afterColon = fileLine.substring(locOfColon + 2);
                const beforeColon = fileLine.substring(0, locOfColon);
                // console.log('before colon', beforeColon);
                // console.log('after colon', afterColon);

                if (beforeColon === "tags") {
                    fileContentsArray[i] = beforeColon + ' = ["' + afterColon.split(", ").join('","') + '"]';
                } else if (beforeColon === "created") {
                    fileContentsArray[i] = 'date = ' + afterColon.substring(0,4)+ '-' + afterColon.substring(5,7) + '-' + afterColon.substring(8,10);
                } else {
                    fileContentsArray[i] = beforeColon + ' = "' + afterColon + '"';
                }
            } else if (fileLine.includes("description")) {
                fileContentsArray[i] = 'description = ""';
            }

            lineNum++;
        }

        if (hasComment) {
            const newFileContents = fileContentsArray.join('\n');
            const fileContents = await fs.promises.writeFile(path + fileHandle.name.replace('html.md', 'md'), newFileContents, 'utf-8');
        }
    }
}
