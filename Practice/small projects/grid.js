var grid = function() {
    var size = 8;
    var symbols = '# # # #';
    for (var i = 0; i < size / 2; i++) {
        console.log(' ' + symbols);
        console.log(symbols + ' ');
    }
};

grid();

// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//  for (var x = 0; x < size; x++) {
//    if ((x + y) % 2 == 0)
//      board += " ";
//    else
//      board += "#";
//  }
//  board += "\n";
//}