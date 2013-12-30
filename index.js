var rows = 100;
var colls = 100;

$(document).ready(function(){
  console.log('dfd');
  for (var i = 0; i < 10; i++) {
    var row = "<tr height='10'>";
    for (var j = 0; j < 10; j++) {
      row += "<td id='" + i + "-" + j + "' width='5'></td>";
    }
    row += '</tr>';
    $('#life-field').append(row);
  }
  init();
  draw(LifeField);
  LifeFiled = process_state();
  draw(LifeField);
});

var LifeField = new Array();

function init() {
  init_array(LifeField);
  LifeField[0][1] = 1;
  LifeField[1][2] = 1;
  LifeField[2][0] = 1;
  LifeField[2][1] = 1;
  LifeField[2][2] = 1;
}

function init_array(arr){
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  };
}

function draw(ar){
  for (var i = 0; i < ar.length; ++i) {
    for (var j = 0; j < ar[i].length; ++j) {
      if (ar[i][j] == 1) {
        console.log($("#" + i + "-" + j));
        $("#" + i + "-" + j).css('background-color', 'black');
      } else {
        $("#" + i + "-" + j).css('background-color', 'white');
      }
    }
  }
}

function process_state() {
  var res_arr = new Array();
  init_array(res_arr);

  for (var i = 0; i < res_arr.length; ++i){
    for (var j = 0; j < res_arr[i].length; ++j) {
      res_arr[i][j] = check(i, j);
      console.log(i, j, res_arr[i][j]);
    }
  }
  return res_arr;
}

function check(i, j) {
  var life_count = 0;
  for (var k = i - 1; k <= i + 1; ++k) {
    for (var h = j - 1; h <= j + 1; ++h) {
      if (((k >= 0) && (k < rows)) &&
          ((h >= 0) && (h < cols)) &&
            ((k != i) && (h != j))) {
        if (LifeField[k][h] == 1)
          life_count++;
      }
    }
  }
  if ((LifeField[i][j] == 0) && (life_count == 3)) return 1;
  if ((LifeFiled[i][j] == 1) && ((life_count == 2) || (life_count == 3))) return 1;
  return 0;
}

