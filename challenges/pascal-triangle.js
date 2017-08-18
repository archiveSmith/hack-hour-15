/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

//beginning and end of array are always 1
//numRows corresponds to how many arrays there are
//level and length starts at 1 and increases until it hits numRows

function pascalTriangle(numRows) {
  
  if (typeof numRows !== 'number') return 'Invalid argument'

  if (numRows === 0) return new Array()
  if (numRows === 1) return [[1]]

  let i;
  let tempLevel = [1,1];
  const container = [[1], [1,1]]
  if (numRows === 2) return container

  let newLevel;
  for (i=3; i<numRows+1; i++) {
    newLevel = new Array(i)
    newLevel[0] = 1
    newLevel[newLevel.length-1] = 1
    
    helper(newLevel, tempLevel)
    container.push(newLevel)

    tempLevel = newLevel
  }
  return container;
}

const helper = (newLevel, tempLevel) => {
  let index = newLevel.findIndex((el) => el === undefined)
  if (index === -1) return newLevel;

  newLevel[index] = tempLevel[index-1] + tempLevel[index]

  helper(newLevel, tempLevel) 
}



module.exports = pascalTriangle;
