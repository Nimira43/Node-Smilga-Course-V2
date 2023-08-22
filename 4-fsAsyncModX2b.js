const { readFile, writeFile } = require('fs')

// This is slightly modified to read TWO files that don't exist and then try to write them to a new file
// Let's see what happens!!!

//--------------------------------------------------------------------------------------------------
console.log('[*]TESTING FOR:');            
readFile('./test-folder/test7.txt', 'utf8', (err, result) => {                  // returns buf
    if (err) {
        console.log('[-]Test7.txt - ERROR!!! ', err)
        return
    }
    const first = result
    console.log('[+]Test7.txt - SUCCESS - STORED IN VARIABLE first: ', first)
    readFile('./test-folder/test8.txt', 'utf8', (err, result) => {
        if (err) {
            console.log('[-]Test8.txt - ERROR!!! ', err)
            return
        }
        const second = result
        console.log('[+]Test8.txt - SUCCESS - STORED IN VARIABLE second: ', second)
        writeFile(
            './test-folder/test-result2.txt',
            `Complete Report: \n
            ${first}\n
            ${second}\n`,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log('[-]Test-Result2.txt - ERROR', err)
                    return
                }
                console.log('[+]Test-Result2.txt - SUCCESS WILL RETURN UNDEFINED: ', result)
            }
        )
    })
})
// Console Logs

/*

[*]TESTING FOR:
[-]Test7.txt - ERROR!!!  [Error: ENOENT: no such file or directory, open 'D:\Projects3\JAVASCRIPT\13 JOHN SMILGA PROJECTS\NODE\Tutorial-02-Built-in-Modules\test-folder\test7.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-02-Built-in-Modules\\test-folder\\test7.txt'       
}

Test 7 failed so the if statement stopped at the return which exited the if statement

*/