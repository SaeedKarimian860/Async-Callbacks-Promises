const btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// moveX(btn, 300, 1000).then(() => {
//   return moveX(btn, 300, 1000)
// })
// .then (() => {
//   return moveX(btn, 300, 1000);
// })
// .then (() => {
//   return moveX(btn, 300, 1000);
// })
// .then(() => {
//   console.log('DONE WITH BOTH!');
// })
// .catch(() => {
//   console.log('OUT OF SPACE, CANNOT MOVE!');
// });

//could be refactored and written like this
moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
  });

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if (elRight + amount > bodyBoundary) {
//     onFailure();
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }, delay);
//   }
// };
// moveX (btn, 100, 1000, () => {
//   moveX (btn, 100, 1000, () => {
//     moveX (btn, 100, 1000, () => {
//       moveX (btn, 100, 1000, () => {
//         moveX (btn, 1000, 1000);
//       });
//     });
//   });
// });

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //Success
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         moveX(
//           btn,
//           700,
//           1000,
//           () => {
//             console.log("REALLY, WE STILL HAVE SCREEN LEFT?");
//           },
//           () => {
//             alert("CANNOT MOVE FURTHER!");
//           }
//         );
//       },
//       () => {
//         //fail
//         alert("CANNOT MOVE FURTHER!");
//       }
//     );
//   },
//   () => {
//     //fail
//     alert("CANNOT MOVE FURTHER!");
//   }
// );
