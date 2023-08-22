const { readFile, writeFile } = require('fs')

//--------------------------------------------------------------------------------------------------
console.log('[*]TESTING FOR:');            
readFile('./test-folder/test1.txt', 'utf8', (err, result) => {                  // returns buf
    if (err) {
        console.log('[-]Test1.txt - ERROR!!! ', err)
        return
    }
    const first = result
    console.log('[+]Test1.txt - SUCCESS - STORED IN VARIABLE first: ', first)
    readFile('./test-folder/test2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('[-]Test2.txt - ERROR!!! ', err)
            return
        }
        const second = result
        console.log('[+]Test2.txt - SUCCESS - STORED IN VARIABLE second: ', second)
        writeFile(
            './test-folder/test-result.txt',
            `Complete Report: \n
            ${first}\n
            ${second}\n`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log('[-]Test-Result.txt - ERROR', err)
                    return
                }
                console.log('[+]Test-Result.txt - SUCCESS WILL RETURN UNDEFINED: ', result)
            }
        )
    })
})
// Console Logs

/*

[*]TESTING FOR:
[+]Test1.txt - SUCCESS - STORED IN VARIABLE first:  REPORT 1

Lorem ipsum dolor sit amet 
consectetur adipisicing elit. 
Quam, reiciendis consectetur? 
Dicta beatae ab excepturi officia, 
voluptatum iure nesciunt placeat
corporis sapiente pariatur similique, 
deleniti vel commodi facilis quisquam rem.
[+]Test2.txt - SUCCESS - STORED IN VARIABLE second:  REPORT 2

Lorem ipsum dolor, sit amet consectetur
adipisicing elit. Error qui assumenda
blanditiis maiores, possimus modi ad
voluptate magnam dolor officia explicabo
consequatur aperiam odio suscipit?
[+]Test-Result.txt - SUCCESS WILL RETURN UNDEFINED:  undefined

*/