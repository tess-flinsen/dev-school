/*Your task, is to calculate the minimal number of moves to win the game
"Towers of Hanoi", with given number of disks.

Towers of Hanoi is a simple game consisting of three rods, and a number
of disks of different sizes which can slide onto any rod. The puzzle
starts with the disks in a neat stack in ascending order of size on one
rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod,
obeying the following simple rules:

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and
placing it on top of another stack i.e. a disk can only be moved if it
is the uppermost disk on a stack.
No disk may be placed on top of a smaller disk.*/

function towersOfHanoi(disks) {
    if (disks === 1) {
        return 1;
    } else {
        return 2 * towersOfHanoi(disks - 1) + 1; 
        /* move (disks - 1) to the extra rod, move the largest disk to the target rod, and then move (disks - 1) to the target rod
         therefore (find the number of moves for (disks-1) * 2) [recursively] + the largest disk*/
    }
}

let numberOfDisks = 4;
console.log(towersOfHanoi(numberOfDisks));