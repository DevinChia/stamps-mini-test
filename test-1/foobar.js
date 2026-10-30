let arr = [];

function isPrime(num) {
    let prime = true;
    if (num < 2) return false;
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        continue;
    }
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FooBar");
    }
    else if (i % 3 === 0) {
        arr.push("Foo");
    }
    else if (i % 5 === 0) {
        arr.push("Bar");
    }
    else {
        arr.push(i);
    }
}

console.log(arr.reverse().join(", "));