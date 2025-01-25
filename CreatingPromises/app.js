const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Your fake data here");
            }
            reject("Request Error!");
        }, 1000)
    })
}

fakeRequest ('/tacos/1')
.then(() => {
    console.log("Done with request")
    console.log('data is:', data)
})
.catch((err) => {
    console.log("Oh No!", err)
})