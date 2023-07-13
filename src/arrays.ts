// // map, forEach, filter, reduce, every, some
// const arr = [1,2,3,4,5,6,7];

// arr.forEach((arrItem) => {
//     console.log(arrItem)
// })

// arr.map((arrItem) => {
//     return 0
// })
// arr.map((arrItem) => {
//     return arrItem + 1
// })

// const arr2 = [{test: 1}, {test: 2}]

// arr2.map(item => {
//     return {
//         ...item,
//         test2: "test2"
//     }
// })

// arr.every(item => item >0)
// arr.every(item => item >2)
// arr.some(item => item >0)
// arr.some(item => item >8)

// arr.filter(item => item > 4)

// arr.forEach((arrItem, index, tt) => {
//     console.log(arrItem + " " + tt)
// })

// arr.reduce((accumulator, item) => {
//     console.log(accumulator)
//     return accumulator
// }, 0)

// arr.reduce((accumulator, item) => {
//     console.log(accumulator)
//     return accumulator + 1
// }, 0)

// arr.reduce((accumulator, item) => {
//     console.log(accumulator)
//     return accumulator + 1
// }, 4)


// arr.reduce((accumulator, item) => {
//     console.log(accumulator)
//     return accumulator + item
// }, 0)
// arr.reduce((accumulator, item) => {
//     console.log(accumulator)
//     return item
// }, 0)


// //will print undefined because accumulator wat not returned from the function
// arr.reduce((accumulator: any, item) => {
//     console.log(accumulator)
//     accumulator++
// }, 0)

// const arr4 = ["key1", "key2", "k3"]

// arr4.reduce((acc: any, item) => {
//     acc[item] = "done"
//     return acc
    
// }, {})

// const result: any = {}

// for (let i = 0 ; i< arr4.length ; i++ ){
//     result[arr4[i]] = "done"
// }

// arr4.reduce((acc: any, item) => {
//     return acc.concat(item)
    
// }, [])

export const test = 1