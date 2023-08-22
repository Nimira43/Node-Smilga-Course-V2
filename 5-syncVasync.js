//-------------------------------------- SYNC - BLOCKING ------------------------------------
// Carrying out my own experiment of Sync V Async - ref: Lecture 22: Sync vs Async

const { readFileSync, writeFileSync } = require('fs')

const one = readFileSync('./test-folder/blockVnoblock/block1.txt', 'utf8')
const two = readFileSync('./test-folder/blockVnoblock/block2.txt', 'utf8')
console.log('[*]TESTING FOR SYNC/BLOCKING:')
console.log('[*]block1.txt')
console.log(one)
console.log('============================================================')
console.log('[*]block2.txt')
console.log(two)
console.log('============================================================')

writeFileSync(
    './test-folder/blockVnoblock/blockJoin.txt',
    `System reports: Block1: "${one} EOL. \n
     System reports: Block2: "${two} EOL. \n
     EOR.`,
    { flag: 'a' }     
)

const blockJoin = readFileSync('./test-folder/blockVnoblock/blockJoin.txt', 'utf8')
 
console.log('[*]BlockJoin.txt')
console.log(blockJoin)
console.log('============================================================')

//-------------------------------------- ASYNC - NON BLOCKING ------------------------------------
const { readFile, writeFile } = require('fs')

console.log('[*]TESTING FOR ASYNC/NON BLOCKING:');            
readFile('./test-folder/blockVnoblock/nonBlock1.txt', 'utf8', (err, result) => {         
    if (err) {
        console.log('[-]NonBlock1.txt - ERROR!!! ', err)
        return
    }
    const three = result
    console.log('[+]Test1.txt - SUCCESS - STORED IN VARIABLE first: ', three)
    readFile('./test-folder/blockVnoblock/nonBlock2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('[-]NonBlock2.txt - ERROR!!! ', err)
            return
        }
        const four = result
        console.log('[+]Test2.txt - SUCCESS - STORED IN VARIABLE second: ', four)
        writeFile(
            './test-folder/blockVnoblock/nonBlockJoin.txt',
            `Complete Report: \n
            ${three}\n
            ${four}\n`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log('[-]NonBlockJoin.txt - ERROR', err)
                    return
                }
                console.log('[+]NonBlockJoin.txt - SUCCESS WILL RETURN UNDEFINED: ', result)
            }
        )
    })
})

// Console Logs output
/*

[*]TESTING FOR SYNC/BLOCKING:
[*]block1.txt
REPORT 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Sapiente praesentium atque voluptas quaerat aliquam qui 
architecto dignissimos, inventore modi magnam animi 
aliquid distinctio cumque earum facere enim cupiditate 
iure beatae reprehenderit rem consectetur blanditiis. Sequi.
============================================================
[*]block2.txt
REPORT 2

Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Vitae odit odio debitis ratione, quaerat quod deserunt 
illo eum facilis, ipsam blanditiis in! Totam qui aliquid 
facilis voluptates iusto cum excepturi.
Eius praesentium maxime facilis excepturi fugiat ullam 
labore impedit quas repellendus. Odio nesciunt maxime nobis 
consequatur nam impedit inventore laboriosam accusamus 
veritatis quae doloribus, molestiae asperiores pariatur 
eligendi neque sint?
============================================================
[*]BlockJoin.txt
System reports: Block1: "REPORT 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Sapiente praesentium atque voluptas quaerat aliquam qui 
architecto dignissimos, inventore modi magnam animi 
aliquid distinctio cumque earum facere enim cupiditate 
iure beatae reprehenderit rem consectetur blanditiis. Sequi. EOL. 

     System reports: Block2: "REPORT 2

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Vitae odit odio debitis ratione, quaerat quod deserunt
illo eum facilis, ipsam blanditiis in! Totam qui aliquid
facilis voluptates iusto cum excepturi.
Eius praesentium maxime facilis excepturi fugiat ullam
labore impedit quas repellendus. Odio nesciunt maxime nobis
consequatur nam impedit inventore laboriosam accusamus
veritatis quae doloribus, molestiae asperiores pariatur
eligendi neque sint? EOL.

     EOR.
============================================================
[*]TESTING FOR ASYNC/NON BLOCKING:
[+]Test1.txt - SUCCESS - STORED IN VARIABLE first:  REPORT 3

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Dignissimos officiis perspiciatis voluptatum excepturi optio
incidunt doloremque. Explicabo possimus sed eius quas.
Ratione doloribus delectus itaque dicta et ipsam nemo,
id exercitationem sint tempora consequatur?
[+]Test2.txt - SUCCESS - STORED IN VARIABLE second:  REPORT 4

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repellat enim possimus praesentium, commodi blanditiis velit
culpa facilis saepe beatae molestiae quis porro maiores sit!
Debitis explicabo dicta sed optio cumque atque non, sint minima
sapiente ratione architecto reiciendis earum autem enim vitae
aliquam nesciunt beatae libero facere? Voluptatibus soluta aut
ex in debitis odit, id at porro magni. Est pariatur officia
temporibus velit ipsum accusamus quos impedit perferendis,
laboriosam natus quibusdam cum autem voluptatibus sapiente a
commodi voluptas, dignissimos officiis numquam vel corporis
recusandae iusto?
[+]NonBlockJoin.txt - SUCCESS WILL RETURN UNDEFINED:  undefined

*/