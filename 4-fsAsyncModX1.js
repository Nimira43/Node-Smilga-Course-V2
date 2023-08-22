const { readFile, writeFile } = require('fs')

//--------------------------------------------------------------------------------------------------
console.log('[*]TESTING FOR: Async Read - Success')             
readFile('./test-folder/test1.txt', (err, result) => {                  // returns buffer
    if (err) {
        console.log('[-]Test1.txt - ERROR!!! ', err)
        return
    }
    console.log('[+]Test1.txt - SUCCESS!!! ', result)
})
//--------------------------------------------------------------------------------------------------
console.log('[*]TESTING FOR: Async Read - Success')
readFile('./test-folder/test2.txt', 'utf8', (err, result) => {          // returns file content
    if (err) {
        console.log('[-]Test2.txt - ERROR!!! ', err)
        return
    }
    console.log('[+]Test2.txt - SUCCESS!!! ', result)
})
//--------------------------------------------------------------------------------------------------
console.log('[*]TESTING FOR: Async Read - Error')
readFile('./test-folder/test4.txt', (err, result) => {                  // returns error
    if (err) {
        console.log('[-]Test4.txt - ERROR!!! ', err)
        return
    }
    console.log('[+]Test4.txt - SUCCESS!!! ', result)
})
//--------------------------------------------------------------------------------------------------
// Console Logs
/*

[*]TESTING FOR: Async Read - Success
[*]TESTING FOR: Async Read - Success
[*]TESTING FOR: Async Read - Error
[-]Test4.txt - ERROR!!!  [Error: ENOENT: no such file or directory, open 'D:\Projects3\JAVASCRIPT\13 JOHN SMILGA PROJECTS\NODE\Tutorial-02-Built-in-Modules\test-folder\test4.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-02-Built-in-Modules\\test-folder\\test4.txt'       
}
[+]Test1.txt - SUCCESS!!!  <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e 67 ... 185 more bytes>
[+]Test2.txt - SUCCESS!!!  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error qui assumenda blanditiis maiores, possimus modi ad voluptate magnam dolor officia explicabo consequatur aperiam odio suscipit?

----------------------------------------------------------------------------------------------------------------
Updated Console Logs

[*]TESTING FOR: Async Read - Success
[*]TESTING FOR: Async Read - Success
[*]TESTING FOR: Async Read - Error
[-]Test4.txt - ERROR!!!  [Error: ENOENT: no such file or directory, open 'D:\Projects3\JAVASCRIPT\13 JOHN SMILGA PROJECTS\NODE\Tutorial-02-Built-in-Modules\test-folder\test4.txt'] {
Tutorial-02-Built-in-Modules\test-folder\test4.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
Tutorial-02-Built-in-Modules\test-folder\test4.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'D:\\Projects3\\JAVASCRIPT\\13 JOHN SMILGA PROJECTS\\NODE\\Tutorial-02-Built-in-Modules\\test-folder\\test4.txt'       
}
[+]Test1.txt - SUCCESS!!!  <Buffer 52 45 50 4f 52 54 20 31 0d 0a 0d 0a 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 20 0d 0a 63 6f 6e 73 65 63 74 65 74 ... 208 more bytes>
[+]Test2.txt - SUCCESS!!!  REPORT 2

Lorem ipsum dolor, sit amet consectetur
adipisicing elit. Error qui assumenda
blanditiis maiores, possimus modi ad
voluptate magnam dolor officia explicabo
consequatur aperiam odio suscipit?

*/