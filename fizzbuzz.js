//Really, really inefficient way to do FizzBuxx

//Variable declaration
function fizzbuzz(max) {
    var primeArray = [];
    var fizzBuzzArray = [];
    var tempArray = [];
    var i = 2;
    var x;
    var prime;
    var prime2;
    var count = 0;
    var print;
    
    //Calculates all prime numbers between 2 and max (inclusive on both ends)
    while (i <= max) {
        prime = true;
        for (x =0; x < primeArray.length; x++) {
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
    for (print of primeArray) {
        (fizzBuzzArray[print - 1] = print);
    }
    
    /*For each prime in primeArray, takes it times all other primes in the array,
    then times all values received from that by all primes in primeArray until the
    smallest number received from this multiplication is greater than max, adding
    each number received that is smaller than max to the array to be printed*/
    for (prime = 0; prime < primeArray.length; prime++) {
        tempArray = primeArray.slice(0);
        while (fizzBuzzArray[prime] * tempArray[0] <= max) {
            for (i = 0; i < tempArray.length; i++) {
                for (prime2 = 0; prime2 < primeArray.length; prime2++) {
                    if (fizzBuzzArray[prime2] * tempArray[i] <= max) {
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
    while (i < max) {
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
    
    for (print of fizzBuzzArray) {
        console.log(print);
    }
}

fizzbuzz(100);