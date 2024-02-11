const {readFile, writeFile, writeFileSync} = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.txt', `This is awesome: ${first}, ${second}`)
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}

start()


// const getText= (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile('./content/first.txt', 'utf8', (err, data) => {
//             if (err) {
//                 resolve(err)
//             }else {
//                 resolve(data)
//             }
//         })
//     })
// }