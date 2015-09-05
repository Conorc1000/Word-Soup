var findScore = require('./findScore');
var cloneArray = require('./cloneArray');

module.exports = function (boardContext, trie) {
  console.log('solving');
  var topScore = {word:'', score:0};
  var wordFound = false;

  var rows = boardContext.getNumRows();
  var cols = boardContext.getNumCols();

  var charStack = [];
  var words = [];
  var route = [];


  var findWords = function (row, col, node) {
    if (visited[row][col]) return;

    if (!node || !node.has(boardContext.charAt(row, col))) return;

    node = node.next(boardContext.charAt(row, col));
    charStack.push(boardContext.charAt(row, col));
    visited[row][col] = true;
    route.push([row,col]);


    for (var dx = -1; dx <= 1; dx++) {
      var c = col + dx;
      if (c < 0 || c >= cols) continue;

      for (var dy = -1; dy <= 1; dy++) {
        var r = row + dy;
        if (r < 0 || r >= rows) continue;
        if (dx === 0 && dy === 0) continue;

        findWords(r, c, node);
      }
    }

    if (node.isEndOfWord) {
      var s = "";
      for (var i = 0; i < charStack.length; i++) {
        s = s + charStack[i];
      }

      var score = findScore(s);

      var wordScoreObj = { word:s, score:score, visited:cloneArray(visited), route:cloneArray(route)};

      words.push(wordScoreObj);

      if(score > topScore.score)
      {
        topScore = wordScoreObj;
        wordFound = true;
      }
    }

    visited[row][col] = false;
    charStack.pop();
    route.pop();
  };


  var visited = new Array(rows);
  for (var row = 0; row < rows; row++) {
    visited[row] = new Array(cols);
    for (var col = 0; col < cols; col++) {
      visited[row][col] = false;
    }
  }

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      findWords(r, c, trie);
    }
  }

  if(wordFound)
  {
    console.log('top word:', topScore.word);
    console.log(topScore.score);
    console.log(topScore.route);
    return topScore;
  }
  else
  {
    return null;
  }

};
