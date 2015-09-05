var cloneArray = require('./cloneArray');

var ArraysDeepEqual = function(arr1, arr2)
{
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

var traverseBoard = function(board, callback)
{
  for (var i = board.length - 1; i >= 0; i--) {
    var row =board[i];

    for (var j = row.length - 1; j >= 0; j--) {
      var square =row[j];

      callback(j,i,square, board);
    }
  }
};

var deleteIfRemoved = function(board, toBeRemoved)
{
    for (var i = board.length - 1; i >= 0; i--) {
    var row =board[i];

    for (var j = row.length - 1; j >= 0; j--) {
      if(toBeRemoved[i][j])
      {
        board[i][j] = '*';
      }
    }
  }
};

var moveIfSpace = function(board)
{

  var oldBoard;
  do{
    //keep pushing elements down
    oldBoard = cloneArray(board);

    for (var i = 0;  i < board.length - 1; i++) {
      var row = board[i];

      for (var j = 0;  j < row.length; j++) {
        var square = board[i][j];
        var below = board[i+1][j];

        if(square !== '*' && below === '*'){
           board[i+1][j] = square;
           board[i][j] = '*';
        }
      }
    }
  }while(!ArraysDeepEqual(oldBoard, board));

  do{
    //keep pushing elements right
    oldBoard = cloneArray(board);

    for (var i = 0;  i < board.length; i++) {
      var row = board[i];

      for (var j = 0;  j < row.length -1; j++) {
        var square = board[i][j];
        var right = board[i][j+1];

        if(square !== '*' && right === '*'){
           board[i][j+1] = square;
           board[i][j] = '*';
        }
      }
    }
  }while(!ArraysDeepEqual(oldBoard, board));


};

var getOneBelow = function(board, coord)
{
  return board;
};

module.exports = function(board, toBeRemoved)
{
  // for each board square
    // check if board has any to be removed on or below it
    //if it does, replace the letter with the letter above it
    //
  deleteIfRemoved(board, toBeRemoved);
  moveIfSpace(board);
  console.log('rearranged');
  console.log(board);

};
