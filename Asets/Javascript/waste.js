let sign = "X";
let disp = document.getElementById("display");
function printx(number) {
    let get = document.getElementById("td" + number);
    console.log(get);
    if (get.innerText == "") {
        get.innerText = sign;
        checkSign();
        disp.innerHTML = `Now Turn is -- ${sign} `;
    }
    winner();
  
}
function checkSign() {
  if (sign == "X") sign = "O";
  else sign = "X";
}

function getbox(no) {
  return document.getElementById("td" + no).innerHTML;
}
function checkbox(a, b, c, r) {
  if (getbox(a) == r && getbox(b) == r && getbox(c) == r) return true;
  else return false;
}
function winner() {
  if (
    checkbox(1, 2, 3, sign) ||
    checkbox(4, 5, 6, sign) ||
    checkbox(7, 8, 9, sign) ||
    checkbox(1, 4, 7, sign) ||
    checkbox(2, 5, 8, sign) ||
    checkbox(3, 6, 9, sign) ||
    checkbox(1, 5, 9, sign) ||
    checkbox(3, 5, 7, sign)
  ) {
      disp.innerHTML = sign + "   is Winner";
      for (let k = 1; k <= 9; k++) {
          document.getElementById("td" + k).innerHTML = "";
        }
    throw "Game End";
  }
}
