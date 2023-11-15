function isEnoughCapacity(products, containerSize) {
    
    const productsValue = Object.values(products)

    let sum = { ...productsValue }

    let slac = sum[0] + sum[1] + sum[2]
    
        if (`${slac}` <= containerSize) {
            return true
        } else {
            return false
        }
    }
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); 

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); 

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); 

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); 
console.log(
  isEnoughCapacity({ apples: 5, banana: 15, flower: 22 }, 50)
); 
console.log(
  isEnoughCapacity({ apples: 20, banana: 15, flower: 22 }, 50)
); 