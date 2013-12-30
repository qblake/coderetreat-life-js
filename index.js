
var LifeField = new Array();

for (var i = 0; i < 10; i++) {
  LifeField[i] = [];
  for (var j = 0; j < 10; j++) {
    LifeField[i][j] = 0;
  }
}

var canvas = document.getElementById("example");
canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("example");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  LifeField[Math.floor(y / 10) ][ Math.floor(x / 10)] = 1;
  draw(LifeField);
}

function draw(array){

  var example = document.getElementById("example"),
  ctx     = example.getContext('2d');
  x =0;
  y= 0;
  for (var i = 0; i < 10; i++) {
    x = 0;
    for (var j = 0; j < 10; j++) {
      if (LifeField[i][j] == 1) {
        ctx.fillStyle = "green";
      }else{
        ctx.fillStyle = "gray";
      }
      ctx.fillRect(x, y, 10, 10);
      x+=10;
    }
    y += 10;
  }
}

check_array = function(arr) {
  var res_arr = [];
  for(var i=0; i < arr.length; i++) {
    res_arr[i] = [];
    for(var j=0; j< arr[i].length; j++){
      res_arr[i][j] = new_cell_state(i,j);
    }
  }
  return res_arr;
};

new_cell_state = function(x,y) {
  var life_around = life_around_count(x,y);
  var new_state = chech_new_state(x,y,life_around);
  return new_state;
};

life_around_count = function(x,y) {
  var life_around = 0;
  for(var i=x-1; i <= x+1; i++) {
    for(var j=y-1; j <= y+1; j++) {
      if ((i == x) && (j == y)) { continue; }
      if ((i == -1) || (j == -1)) continue;
      if ((i == LifeField.length) || (j == LifeField[0].length)) { continue; };

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

function step() {
  LifeField = check_array(LifeField);
  draw(LifeField);
}
