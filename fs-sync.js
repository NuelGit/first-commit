const fs = require('fs')

console.log('start')

readFileSync = fs.readFileSync
writeFileSync = fs.writeFileSync

const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

//console.log(first)
//console.log(second)

writeFileSync('./content/result-sync.txt', `Here is the result: 
${first} and the ${second}` , {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')
