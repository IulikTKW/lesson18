// const arr = [1,2,3,4,5,6]

// const arr1 = arr.filter((item, index, arr) => {
//     return item % 2 === 0;    
// })

// const arr1 = arr.filter((item) => {
//     return item > 2;    
// })

// sa ramina doar cifrele mai mari de cat 2
// sa ramina doar elementele a carora pozitia in lista este impara


// const arr1 = arr.filter((item, index) => {
//     return index % 2 === 0 && index !== 0;    
// })

// const arr1 = arr.filter((item, index) => {
//     return index % 2 > 0;    
// })




// console.log(arr.map(item => item + 1))

// console.log('1', arr.length)

// const result = arr.push(9)

// console.log('2', arr.length)

// console.log('result', result)

// console.log(pushResult)

// const testFunc = (num) => {
//     console.log(num)

//     return num;
// }

// const result = testFunc(5)

// console.log('result', result)

// const arr = [1, 2, 3, 4, 5, 'str']

// const lastElement = arr.pop()

// console.log(arr)
// console.log(lastElement)

// const arr1 = [1,2,3,4,5]

// const arr2 = []

// const test = arr1.forEach((item, index, arr) => {
//     if(index > 2) arr2.push(item)
//         return item;
// })

// console.log(test)

// functie primeste lista cu cifre si un numare( cate elemente de la capat trebuie scoase)

// const arr = [1,2,3,4,5,6,7]

// const func = (list, num) => {
//     if(num > list.length -1 ) return list;

//     const result = [...list]

//     for( let i = 1; i <= num ;i++) {
//         result.pop()
//     }

//     return result;
// }

// console.log(func(arr, 8))
// console.log(arr)

// const restFunc = (arg1, arg2, ...rest) => {
//     console.log(rest)

// }

// restFunc(1,2,3,4,5,6,7,8)

const departamentuBucaniUtilizato5 = {
    name: 'Alex',
    age: 32,
    location: {
        city: 'Chisinau'
    }
}

// const name = obj.name
// const age = obj.age
// const location = obj.location

// const { age, location } = {...departamentuBucaniUtilizato5}
// const { name } = {...departamentuBucaniUtilizato5}

// const arr = ['Alex', 'Victor', 'Vasile']

// const [name1, name3, name2] = [...arr]

// const nume1 = arr[0]
// const nume2 = arr[1]
// const nume3 = arr[2]
// const [primul,, alTreilea] = [...arr]

// console.log('nume2', name2)
// console.log('nume3', name3)
// console.log('nume1', name1)

// console.log(primul, alTreilea)

const arr = [1,'22',2,3,4,5]

// const result = arr.some((item, index, arr) => {
//     console.log(item)
//     return item === 5   
// })

const result = arr.every((item, index, arr) => {
    console.log(item)
    return typeof item === 'number'  
})


console.log(result)
