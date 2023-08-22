const path = require('path')

// path seperator
console.log('[*]Path Separator')
console.log(path.sep)


// file paths
const filePath1A = path.join('/test-folder', '/test-sub', '/lastTutorialFinalCopies', '/7-mind-grenade.js')
const filePath1B = path.join('/test-folder', '/test-sub', '/lastTutorialFinalCopies')
const filePath2 = path.join('/test-folder/', '/test3.txt')
const filePath3 = path.join('/test-folder', '/test-sub', '/test5.txt')
const filePath4 = path.join('/test-folder/', '/index.html')

console.log('[*]Joined File Paths')
console.log(filePath1A)
console.log(filePath1B)
console.log(filePath2)
console.log(filePath3)
console.log(filePath4)

// End of Path - The Base
const base1 = path.basename(filePath3)
const base2 = path.basename(filePath1B)

console.log('[*]End of Path - Files')
console.log(base1)
console.log(base2)

const absolute = path.resolve(__dirname, 'test-folder', 'test-sub', 'test2.txt')
console.log('[*]Absolute path of test2.txt')
console.log(absolute)

/* Console.logs

[*]Path Separator
\
[*]Joined File Paths
\test-folder\test-sub\lastTutorialFinalCopies\7-mind-grenade.js
\test-folder\test-sub\lastTutorialFinalCopies
\test-folder\test3.txt
\test-folder\test-sub\test5.txt
\test-folder\index.html
[*]End of Path - Files
test5.txt
lastTutorialFinalCopies
[*]Absolute path of test2.txt
D:\Projects3\JAVASCRIPT\13 JOHN SMILGA PROJECTS\NODE\Tutorial-02-Built-in-Modules\test-folder\test-sub\test2.txt

*/