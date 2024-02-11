const {readFile, writeFile, writeFileSync} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first}, ${second}`)
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