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