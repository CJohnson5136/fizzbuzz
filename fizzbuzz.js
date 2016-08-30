//Really, really inefficient way to do FizzBuxx

//Variable declaration
var maxNum = 100;
var primeArray = [];
var fizzBuzzArray = [];
var tempArray = [];
var i = 2;
var x;
var prime;
var prime2;
var count = 0;
var print;

//Calculates all prime numbers between 2 and maxNum (inclusive on both ends)
while (i <= maxNum) {
    prime = true;
    for (x in primeArray) {
        if (i % primeArray[x] == 0) {
            prime = false;
        }
    }
    if (prime == true) {
        primeArray.push(i);
    }
    i++;
}

//Removes 3 and 5 from the prime numbers
primeArray.splice(1,2);

//Adds the prime numbers to the array that is printed at the end
for (print in primeArray) {
    (fizzBuzzArray[primeArray[print] - 1] = primeArray[print]);
}

/*For each prime in primeArray, takes it times all other primes in the array,
then times all values received from that by the same prime until the smallest
number received from this multiplication is greater than maxNum, adding each
number received that is smaller than maxNum to the array to be printed*/
for (prime in primeArray) {
    tempArray = primeArray.slice(0);
    while (fizzBuzzArray[prime] * tempArray[0] <= maxNum) {
        for (i in tempArray) {
            for (prime2 in primeArray) {
                if (fizzBuzzArray[prime2] * tempArray[i] <= maxNum) {
                    fizzBuzzArray[fizzBuzzArray[prime2] * tempArray[i] - 1] = fizzBuzzArray[prime2] * tempArray[i];
                }
            }
            tempArray[i] = fizzBuzzArray[prime] * tempArray[i];
        }
    }
}

//Adds 1 to the beginning of the array to be printed.
fizzBuzzArray[0] = 1;

//Fills all blanks in the array to be printed with Fizz, Buzz, or FizzBuzz
//Depending on if the number is divisible by 3, 5, or both
i = 0;
while (i < maxNum) {
    if (typeof fizzBuzzArray[i] != 'number') {
        if (count == 0 || count == 2 || count == 3 || count == 5) {
            fizzBuzzArray[i] = "Fizz";
        }
        else if (count == 1 || count == 4) {
            fizzBuzzArray[i] = "Buzz";
        }
        else {
            fizzBuzzArray[i] = "FizzBuzz";
        }
        count++;
        count = count % 7;
    }
    i++;
}

for (print in fizzBuzzArray) {
    console.log(fizzBuzzArray[print]);
}
