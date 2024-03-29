/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
    let count = init
    return {
        increment: ()=> ++count,
        decrement: ()=> --count,
        reset: ()=> count = init
    }
};


// CLOSEST ATTEMPT W/O LOOKING AT SOLUTION DISCUSSION: //

// const createCounter = (init) => ({
//     reset: () => {
//         console.log(init)
//         return init
//     },
//     increment: () => {
//         init++
//         console.log(init)
//         return init
//     },
//     decrement: () => {
//         init--
//         console.log(init)
//         return init
//     }
// });


 const counter = createCounter(5)
//  const counter = createCounter(0)
 console.log(counter.increment()); // 1
 console.log(counter.decrement()); // 1
 console.log(counter.reset()); // 0