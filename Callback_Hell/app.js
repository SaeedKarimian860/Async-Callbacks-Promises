// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayedColorChange('purple', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('blue', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('yellow', 1000, () => {
        
                })
            })
        })
    })
});



searchMoviesAPI('Blues Brothers', () => {
    saveToMyDB(movies, () => {
        //if it works, run this:
    }, () => {
        //if it doesn't work, run this:
    })
}, () => { 
    //if API is down, or request failed
})