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
};

new_cell_state = function(x,y) {
  for(var i=x-1; i <= x+1; i++) {
    for(var j=y-1; y <= y+1; y++) {
      life_around = life_count_around_cell()
    }
  }
};

