console.log('Script loaded');

let evenSum = 0;
let oddSum = 0;
let evenCount = 0;
let oddCount = 0;

for (let n = 1; n <= 50; n++) {
    if (n % 2 === 0) {
        evenSum += n;
        evenCount++;
    } else {
        oddSum += n;
        oddCount++;
    }
}

console.log('Sum of evens:', evenSum);
console.log('Sum of odds:', oddSum);
console.log('Event count:', evenCount);
console.log('Odd count:', oddCount);
