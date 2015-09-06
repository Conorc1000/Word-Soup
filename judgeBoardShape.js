// this module measures the standard deviation of board row lengths from the average (sort of).
// As square boards are better, the lower the deviation, the better shape the board is in.
// It only measure deviation when rows are longer than the average, as these are more likely to make problems

module.exports = function(board)
{
  var averageWidth = 0;
  for (var i = board.length - 1; i >= 0; i--) {
    averageWidth += board[i].length;
  }

  averageWidth /= board.length;

  deviation = 0;

  for (i = board.length - 1; i >= 0; i--) {

    if (averageWidth < board[i].length)
    {
      deviation += Math.pow((board[i].length - averageWidth, 2));
    }
  }

  return deviation;

};
