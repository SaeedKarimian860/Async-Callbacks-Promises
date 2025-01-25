// async function hello() {
// }

// const sing = async () => {
//     throw "Oh No, Problem!"
//     return 'La La La La'
// }

// sing()
// .then((data) => {
//     console.log('Promise resolved with:', data)
// })
// .catch((err) => {
//     console.log('Promise rejected!')
//     console.log(err)
// })



const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'tinykittens') return 'Welcome!'
    throw 'Invalid Password'
}

login('BigO') //if you pass in the correct password it will log you in! otherwise it will throw the correct errors
.then(msg => {
    console.log("Logged In")
    console.log(msg)
})
.catch(err => {
    console.log("Error!")
    console.log(err)
})








const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


// delayedColorChange('red', 1000)
// .then(() => delayedColorChange('orange', 1000))
// .then(() => delayedColorChange('yellow', 1000))
// .then(() => delayedColorChange('green', 1000))
// .then(() => delayedColorChange('blue', 1000))
// .then(() => delayedColorChange('indigo', 1000))
// .then(() => delayedColorChange('violet', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All Done!"
}

// rainbow().then(() => console.log("End of Rainbow!"))

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow!")
}

printRainbow();