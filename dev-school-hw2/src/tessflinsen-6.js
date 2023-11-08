/*Given an array arr of strings, complete the function by calculating the
total perimeter of all the islands. Each piece of land will be marked
with 'X' while the water fields are represented as 'O'. Consider each
tile being a perfect 1 x 1 piece of land. Some examples for better
visualization:
['XOOXO',
'XOOXO',
'OOOXO',
'XXOXO',
'OXOOO']
which represents:
should return: "Total land perimeter: 24".
Following input:
['XOOO',
'XOXO',
'XOXO',
'OOXX',
'OOOO']
which represents:
should return: "Total land perimeter: 18"*/

function total_land_perimeter(grid) {
    if (!grid || grid.length === 0) {
      return "Total land perimeter: 0";
    }
  
    const num_rows = grid.length;
    const num_cols = grid[0].length;
    let total_perimeter = 0;
  
    for (let i = 0; i < num_rows; i++) {
      for (let j = 0; j < num_cols; j++) {
        if (grid[i][j] === 'X') {
          total_perimeter += 4; 
  
          if (i > 0 && grid[i - 1][j] === 'X') {
            total_perimeter -= 2; 
            }
          if (j > 0 && grid[i][j - 1] === 'X') {
          total_perimeter -= 2; 
          }
        }
      }
    }
  
    return "Total land perimeter: " + total_perimeter;
  }
  

  const grid = 
  ['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']
  
  console.log(total_land_perimeter(grid)); 
  