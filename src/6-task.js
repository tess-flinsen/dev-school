/*Your task is to make a function that can take any non-negative integer
as an argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321*/

function bubbleSort(array)
{
    for (let i = 0; i < array.length - 1; i++)
    {
        for (let j = 0; j < array.length - i - 1; j++)
        {
            if (array[j] < array[j + 1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function descendingDigits(integer)
{
    if (integer < 0) return "Attention: Non-negative numbers only!";
    else if (integer === 0) return 0; 
    else 
    {
        let array = [];
        while (integer > 0) 
        {
            let rest = integer % 10;
            integer = Math.floor(integer / 10);
            array.push(rest);
        }

        array = bubbleSort(array);

        let result = "";
        for (let i = 0; i < array.length; i++)
        {
            result += array[i];
        }
        return parseInt(result);
    }
}

console.log(descendingDigits(12)) //pass your number here