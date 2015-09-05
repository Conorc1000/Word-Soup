module.exports = function(word)
{
  var scoreMap = {
  "A": 1, "C": 2, "B": 2, "E": 1, "D": 2, "G": 3, "F": 4, "I": 2, "H": 4, "K": 5, "J": 8, "M": 2, "L": 5, "O": 1, "N": 3, "Q": 10, "P": 2, "S": 1, "R": 1, "U": 3, "T": 1, "W": 4, "V": 4, "Y": 4, "X": 8, "Z": 10
  };

  var score = 0;

  for(var i = 0, len = word.length; i < len; i++)
  {
    score += scoreMap[word[i]];
  }

  score *= word.length;

  return score;
};
