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
});

var LifeField = new Array();

function init() {
  init_array();
  LifeField[0][1] = 1;
  LifeField[1][2] = 1;
  LifeField[2][0] = 1;
  LifeField[2][1] = 1;
  LifeField[2][2] = 1;
}

function init_array(){
  for (var i = 0; i < 10; i++) {
    LifeField[i] = new Array();
  };
}

function draw(array){

}

