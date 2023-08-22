const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./test-folder/file-sys-files/fsys1.txt', 'utf8')
const second = readFileSync('./test-folder/file-sys-files/fsys2.txt', 'utf8')
const third = readFileSync('./test-folder/test-sub/lastTutorialFinalCopies/7-altmod-names.js', 'utf8')
const fourth = readFileSync('./test-folder/index.html', 'utf8')
const fifth = readFileSync('./test-folder/test-sub/test5.txt', 'utf8')
const sixth = readFileSync('./test-folder/test-sub/lastTutorialFinalCopies/7-alt-flavour.js', 'utf8')
 
console.log('[*]fsys1.txt')
console.log(first)
console.log('============================================================')
console.log('[*]fsys2.txt')
console.log(second)
console.log('============================================================')
console.log('[*]7-altmod-names.js')
console.log(third)
console.log('============================================================')
console.log('[*]index.html')
console.log(fourth)
console.log('============================================================')
console.log('[*]test5.txt')
console.log(fifth)
console.log('============================================================')
console.log('[*]7-alt-flavour.js')
console.log(sixth)
console.log('============================================================')

writeFileSync(
    './test-folder/file-sys-files/fsys3.txt',
    `System reports: FSYS1: "${first} EOL. \n
     System reports: FSYS2: "${second} EOL. \n
     EOR.`)  // With the flag the file would be overwritten

writeFileSync(
    './test-folder/file-sys-files/fsys3.txt',
    `System reports: FSYS1: "${first} EOL. \n
     System reports: FSYS2: "${second} EOL. \n
     EOR.`,
    { flag: 'a' }     // The flag 'a' appends to a file. It doesn't overwrite
)

const seventh = readFileSync('./test-folder/file-sys-files/fsys3.txt', 'utf8')
 
console.log('[*]fsys3.txt')
console.log(seventh)
console.log('============================================================')

/* Console.logs

[*]fsys1.txt
This the System File X2-'fhe7s£gtr%kdn£oR43' /ae:0f:2f:34:9b:ac//!-//-^$ aes-dec-"Hello"
"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Accusantium officia dicta, ea debitis aspernatur voluptatem,
eveniet ab sed illum nihil eum aut autem possimus laboriosam
recusandae sequi facere illo error, magni animi harum.
Numquam, deserunt?"
============================================================
[*]fsys2.txt
Hi there, wot's up?
"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Eligendi aut quo necessitatibus fugiat unde, accusantium libero beatae.
Animi velit, sint itaque modi ipsa quae?
Voluptate non itaque veniam nam officiis quaerat nihil vitae repudiandae ea! Unde quia quos blanditiis dolor!
============================================================
[*]7-altmod-names.js
const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }
============================================================
[*]index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nodes Testing</title>
</head>
<body>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reiciendis consectetur? Dicta beatae ab excepturi officia, voluptatum iure nesciunt placeat corporis sapiente pariatur similique, deleniti vel commodi facilis quisquam rem.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error qui assumenda blanditiis maiores, possimus modi ad voluptate magnam dolor officia explicabo consequatur aperiam odio suscipit?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium officia dicta, ea debitis aspernatur voluptatem, eveniet ab sed illum nihil eum aut autem possimus laboriosam recusandae sequi facere illo error, magni animi harum. Numquam, deserunt?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aut quo necessitatibus fugiat unde, accusantium libero beatae. Animi velit, sint itaque modi ipsa quae? Voluptate non itaque veniam nam officiis quaerat nihil vitae repudiandae ea! Unde quia quos blanditiis dolor!</p> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam ut aliquam officia veritatis quam!</p>
</body>
</html>
============================================================
[*]test5.txt
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam ut aliquam officia veritatis quam!
============================================================
[*]7-alt-flavour.js
module.exports.items = ['item1', 'item2']

const person = {
    name: 'bob',
}

module.exports.singlePerson = person

============================================================
[*]fsys3.txt
System reports: FSYS1: "This the System File X2-'fhe7s£gtr%kdn£oR43' /ae:0f:2f:34:9b:ac//!-//-^$ aes-dec-"Hello"
"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Accusantium officia dicta, ea debitis aspernatur voluptatem,
eveniet ab sed illum nihil eum aut autem possimus laboriosam
recusandae sequi facere illo error, magni animi harum.
Numquam, deserunt?" EOL.

     System reports: FSYS2: "Hi there, wot's up?
"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Eligendi aut quo necessitatibus fugiat unde, accusantium libero beatae.
Animi velit, sint itaque modi ipsa quae?
Voluptate non itaque veniam nam officiis quaerat nihil vitae repudiandae ea! Unde quia quos blanditiis dolor! EOL.

     EOR.System reports: FSYS1: "This the System File X2-'fhe7s£gtr%kdn£oR43' /ae:0f:2f:34:9b:ac//!-//-^$ aes-dec-"Hello"
"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Accusantium officia dicta, ea debitis aspernatur voluptatem,
eveniet ab sed illum nihil eum aut autem possimus laboriosam
recusandae sequi facere illo error, magni animi harum.
Numquam, deserunt?" EOL.

     System reports: FSYS2: "Hi there, wot's up?
"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Eligendi aut quo necessitatibus fugiat unde, accusantium libero beatae.
Animi velit, sint itaque modi ipsa quae?
Voluptate non itaque veniam nam officiis quaerat nihil vitae repudiandae ea! Unde quia quos blanditiis dolor! EOL.

     EOR.
============================================================

*/