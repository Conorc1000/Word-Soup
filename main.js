var prefix = require ('./prefix');
var createBoardWithContext = require('./createBoard');
var Trie = require('./Trie');
var rearrangeLetters = require('./rearrangeLetters');
var solve = require('./solve');
var fs = require('fs');

var words = fs.readFileSync('/usr/share/dict/words', 'UTF-8').toUpperCase().split('\n');

//dictionary trie
var dict = new Trie();
var boardContext = createBoardWithContext();
totalScore = 0;

for(var i = 0, len = prefix.length; i < len; i++)
{
  dict.insert(prefix[i]);
}

for(i = 0, len = words.length; i < len; i++)
{
  word = words[i];
  if(word.length > 2)
  {
    dict.insert(word);
  }
}


var start = process.hrtime();
console.log("start");

do{
  var result = solve(boardContext, dict);

  if(result)
  {
    rearrangeLetters(boardContext.board, result.visited);
    totalScore += result.score;
  }
  else
  {
    console.log('no more words found. Total score: ', totalScore);
  }

}while (result);

var timeTook = process.hrtime(start);
console.log('Time took in milliseconds: ', ((timeTook[0] * 1000) + (timeTook[1]/1000000)));

