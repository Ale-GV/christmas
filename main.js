var NumberOfWords = 50;

var words = new BuildArray(NumberOfWords);

// Use the following variables to
// define your random words:
words[1] = "Christmas Tree";
words[2] = "Gingerbread Cookie";
words[3] = "Poinsettia";
words[4] = "Santa Claus";
words[5] = "Frosty the Snowman";
words[6] = "Presents";
words[7] = "Reindeer";
words[8] = "Gingerbread House";
words[9] = "Ornaments";
words[10] = "North Pole";
words[11] = "Fireplace";
words[12] = "Christmas Carolers";
words[13] = "The Three Kings";
words[14] = "Tamales";
words[15] = "Santa's Sleigh";
words[16] = "Snowball Fight";
words[17] = "Snow Angel";
words[18] = "Santa's List";
words[19] = "Hot Cocoa";
words[20] = "Santa's Elves";
words[21] = "The Grinch";
words[22] = "Buddy the Elf";
words[23] = "Candy Cane";
words[24] = "Stockings";
words[25] = "Ice Skating";
words[26] = "Cindy Lou Who";
words[27] = "Fruitcake";
words[28] = "Wrapping Paper";
words[29] = "A Partridge in a Pear Tree";
words[30] = "Nativity";
words[31] = "Sledding";
words[32] = "Skiing";
words[33] = "Snowboarding";
words[34] = "Gift Wrapping";
words[35] = "Nutcracker";
words[36] = "Icicles";
words[37] = "Rocking Horse";
words[38] = "Elf on the Shelf";
words[39] = "Shopping";
words[40] = "Toy Soldier";
words[41] = "Charlie Brown";
words[42] = "Mall Santa";
words[43] = "Opening Gifts";
words[44] = "Chimney";
words[45] = "Snowflakes";
words[46] = "Ugly Sweater";
words[47] = "5 Golden Rings";
words[48] = "Turkey";
words[49] = "Mrs. Claus";
words[50] = "Wreath";

function BuildArray(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}

function PickRandomWord(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords);

  // Display the word inside the text box
  frm.WordBox.value = words[rnd];
}
