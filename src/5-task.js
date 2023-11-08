/*In this little assignment you are given a string of space separated
numbers, and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and
highest number is first.*/

function highAndLow(string)
{
    let numArray = string.split(" ");

    let highest = numArray[0];
    let lowest = numArray[0];

    for (let i = 1; i < numArray.length; i++) {
        let num = numArray[i];
        if (num > highest) {
            highest = num;
        }
        if (num < lowest) {
            lowest = num;
        }
    }

    return highest + " " + lowest;


}
let string = "1 9 3 4 -5"; //pass your string here
console.log(highAndLow(string))
