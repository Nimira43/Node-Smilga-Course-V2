//-------------------------------------- SYNC - BLOCKING ------------------------------------
// Following John's Lecture point by point - Lecture 22: Sync vs Async

const { readFileSync, writeFileSync } = require('fs')
console.log('START SYNC TASK')
const one = readFileSync('./test-folder/blockVnoblock/block3.txt', 'utf8')
const two = readFileSync('./test-folder/blockVnoblock/block4.txt', 'utf8')

writeFileSync(
    './test-folder/blockVnoblock/blockJoin2.txt',
    `System reports: Block3: "${one} EOL. \n
     System reports: Block4: "${two} EOL. \n
     EOR.`,
    { flag: 'a' }     
)
console.log('SYNC TASK COMPLETED')
console.log('SYNC DONE - STARTING NEXT TASK')
console.log('============================================================')

//-------------------------------------- ASYNC - NON BLOCKING ------------------------------------
const { readFile, writeFile } = require('fs')

console.log('START ASYNC TASK');            
readFile('./test-folder/blockVnoblock/nonBlock3.txt', 'utf8', (err, result) => {                  // returns buf
    if (err) {
        console.log(err)
        return
    }
    const three = result
    readFile('./test-folder/blockVnoblock/nonBlock4.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const four = result
        writeFile(
            './test-folder/blockVnoblock/nonBlockJoin2.txt',
            `Complete Report: \n
            ${three}\n
            ${four}\n`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('ASYNC TASK COMPLETED', result)
            }
        )
    })
})
console.log('ASYNC DONE - STARTING NEXT TASK')

// Console Logs

/*

START SYNC TASK
SYNC TASK COMPLETED
SYNC DONE - STARTING NEXT TASK
============================================================
START ASYNC TASK
ASYNC DONE - STARTING NEXT TASK
ASYNC TASK COMPLETED undefined

*/
