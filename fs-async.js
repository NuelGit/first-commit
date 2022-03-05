const fs = require('fs')

console.log('start')

const readFile =fs.readFile
const writeFile =fs.writeFile

readFile('./content/first.txt', 'utf8', (err, res) =>{
    if(err){
        console.log(err)
        return
    }
    const first = res

    readFile('./content/second.txt', 'utf8', (err2, res2)=>{
        if(err2){
            console.log(err2)
            return
        }
        const second = res2

        writeFile('./content/result-async.txt', `Here is the async result:
         ${first} and ${second}`, (err3, res3) =>{
            if(err3){
                console.log(err3)
                return
            }
            console.log(res3)
         })

         console.log('done with this task')
    } )
})
console.log('starting the next task')