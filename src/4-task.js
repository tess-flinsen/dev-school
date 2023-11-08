/*Define a function that takes an integer argument and returns a logical
value true or false depending on if the integer is a prime.
A prime number is a natural number greater than 1 
that has no positive divisors other than 1 and itself.
Requirements:
- You can assume you will be given an integer input.
- You can not assume that the integer will be only positive. You may be
given negative numbers as well ( or 0 ).
- NOTE on performance: There are no fancy optimizations required, but
still the most trivial solutions might time out. Numbers go up to 2^31 (
or similar, depending on language ). Looping all the way up to n, or
n/2, will be too slow.

Example:
is_prime(1) //false
is_prime(2) // true 
is_prime(-1) // false */

function is_prime(integer)
{
    if (integer <= 1) return false; // 1, 0, and negative numbers

    if (integer <= 3) { // 2 and 3
        return true; 
    }

    if (integer % 2 === 0 || integer % 3 === 0) {
        return false; 
    }
    for (let i = 5; i * i <= integer; i += 6) { //all prime numbers greater than 3 can be written in the form 6k ± 1
        if (integer % i === 0 || integer % (i + 2) === 0) {
          return false; // if the number is divisible by i or i + 2 it isn't prime
        }
    }
    return true; 
}

console.log(is_prime(23)); //pass the integer here