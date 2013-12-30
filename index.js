$(document).ready(function(){
  console.log('dfd');
  for (var i = 0; i < 10; i++) {
    var row = "<tr height='10'>";
    for (var j = 0; j < 10; j++) {
      row += "<td id='" + i + "-" + j + "' width='5' ></td>";
    }
    row += '</tr>';
    $('#life-field').append(row);
  }
  init();
  draw(LifeField);
});

var LifeField = new Array();


function draw(array){

}

check_array = function(arr) {
  var res_arr = [];
  for(var i=0; i < arr.length; i++) {
    res_arr[i] = [];
    for(var j=0; j< arr[i].length; j++){
      res_arr[i][j] = new_cell_state(i,j);
    }
  }
  LifeField = res_arr;
};

new_cell_state = function(x,y) {
  var life_around = life_around_count(x,y);
  var new_state = chech_new_state(x,y,life_around);
  return new_state;
};

life_around_count = function(x,y) {
  var life_around = 0;
  for(var i=x-1; i <= x+1; i++) {
    for(var j=y-1; y <= y+1; y++) {
      if ( (i == x) && (j == y)) continue;
      if (LifeField[i][j] == 1) life_around +=1;
    }
  }
  return life_around;
};

chech_new_state = function(i,j,life_around) {
  if ((LifeField[i][j] === 0) && (life_around == 3)) return 1;
  if ((LifeField[i][j] == 1) && ((life_around == 3) || (life_around == 2))) return 1;
  return 0;
};
