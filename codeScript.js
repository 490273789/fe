const fs = require('fs')
const { exec } = require('child_process')

const extensions = fs.readdirSync('./').filter( extension => /\.vsix$/.test(extension))

const extensionsIterator = extensions[Symbol.iterator]()

const { value: firstExtension } = extensionsIterator.next()

let installCount = 0

install(firstExtension)


function install(extension) {
    let success = true
    console.log(`Starting installing ${extension}`)
    const command = `code --install-extension ${extension}`
    const installProcess = exec(command, (err, stdout, stderr) => {
        if(!err) {
            console.log(err)
            return
        }
        console.log(stdout)
        if(stderr && typeof stderr === 'string' && stderr.includes('Unable to install extension')) {
            success = false;
            console.log(`Error: ${stderr}`)
        }
    })

    installProcess.on('close', (data) => {
        success && ++installCount
        const {value: extension, done} = extensionsIterator.next()
        if(done) {
            install(extension)
        } else {
            console.log(`${installCount} Extensions installing complete!`)
        }
    })
}