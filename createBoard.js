module.exports = function(isBlank) {

  if(isBlank)
  {
    return
  }

  var boggle = {};
  boggle.board = [];

  boggle.getNumCols= function(){ return 13;};
  boggle.getNumRows= function(){ return 8;};

  for(var i = 0; i < 8; i++){

    boggle.board[i] = [];

    for(var j = 0; j < 13; j++){

      var dec = Math.random();

      if(0 < dec <= 0.11333){
        boggle.board[i].push("A");
      }
      else if(0.11333 < dec <= 0.22667){
        boggle.board[i].push("E");
      }
      else if(0.22667 < dec <= 0.34){
        boggle.board[i].push("O");
      }
      else if(0.34 < dec <= 0.40667){
        boggle.board[i].push("R");
      }
      else if(0.40667 < dec <= 0.47333){
        boggle.board[i].push("S");
      }
      else if(0.47333 < dec <= 0.54){
        boggle.board[i].push("T");
      }
      else if(0.54 < dec <= 0.62){
        boggle.board[i].push("I");
      }
      else if(0.62 < dec <= 0.6222){
        boggle.board[i].push("B");
      }
      else if(0.6222 < dec <= 0.6244){
        boggle.board[i].push("C");
      }
      else if(0.6244 < dec <= 0.6266){
        boggle.board[i].push("D");
      }
      else if(0.6266 < dec <= 0.6288){
        boggle.board[i].push("M");
      }
      else if(0.6288 < dec <= 0.63){
        boggle.board[i].push("P");
      }
      else if(0.63 < dec <= 0.72){
        boggle.board[i].push("U");
      }
      else if(0.72 < dec <= 0.78){
        boggle.board[i].push("G");
      }
      else if(0.78 < dec <= 0.84){
        boggle.board[i].push("N");
      }
      else if(0.84 < dec <= 0.852){
        boggle.board[i].push("F");
      }
      else if( 0.852 < dec <= 0.862){
        boggle.board[i].push("W");
      }
      else if( 0.862 < dec <= 0.876){
        boggle.board[i].push("V");
      }
      else if( 0.876 < dec <= 0.888){
        boggle.board[i].push("H");
      }
      else if( 0.888 < dec <= 0.9){
        boggle.board[i].push("Y");
      }
      else if( 0.9 < dec <= 0.92){
        boggle.board[i].push("L");
      }
      else if( 0.92 < dec <= 0.94){
        boggle.board[i].push("K");
      }
      else if( 0.94 < dec <= 0.955){
        boggle.board[i].push("J");
      }
      else if( 0.955 < dec <= 0.97){
        boggle.board[i].push("X");
      }
      else if( 0.97 < dec <= 0.985){
        boggle.board[i].push("Q");
      }
      else if( 0.985 < dec <= 1.0){
        boggle.board[i].push("Z");
      }
    }
  }

  boggle.charAt = function (row, col, val) {
      if (val !== undefined) {
        boggle.board[row][col] = val.toUpperCase();
      }
      return boggle.board[row][col];
  };

  return boggle;
};
