let vplayer = 1;
const one = () => {
  if (document.getElementById("b1").value == "") {
    if (vplayer == 1) {
      document.getElementById("b1").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b1").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const two = () => {
  if (document.getElementById("b2").value == "") {
    if (vplayer == 1) {
      document.getElementById("b2").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b2").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const three = () => {
  if (document.getElementById("b3").value == "") {
    if (vplayer == 1) {
      document.getElementById("b3").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b3").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const four = () => {
  if (document.getElementById("b4").value == "") {
    if (vplayer == 1) {
      document.getElementById("b4").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b4").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const five = () => {
  if (document.getElementById("b5").value == "") {
    if (vplayer == 1) {
      document.getElementById("b5").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b5").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const six = () => {
  if (document.getElementById("b6").value == "") {
    if (vplayer == 1) {
      document.getElementById("b6").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b6").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const seven = () => {
  if (document.getElementById("b7").value == "") {
    if (vplayer == 1) {
      document.getElementById("b7").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b7").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const eight = () => {
  if (document.getElementById("b8").value == "") {
    if (vplayer == 1) {
      document.getElementById("b8").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b8").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const nine = () => {
  if (document.getElementById("b9").value == "") {
    if (vplayer == 1) {
      document.getElementById("b9").value = "X";
      vplayer = 2;
    } else {
      document.getElementById("b9").value = "0";
      vplayer = 1;
    }
  }
  checkWinone();
  checkwintwo();
  document.getElementById("player").innerHTML = vplayer;
};
const checkWinone = () => {
  if (
    document.getElementById("b1").value == "X" &&
    document.getElementById("b2").value == "X" &&
    document.getElementById("b3").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b4").value == "X" &&
    document.getElementById("b5").value == "X" &&
    document.getElementById("b6").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b7").value == "X" &&
    document.getElementById("b8").value == "X" &&
    document.getElementById("b9").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b1").value == "X" &&
    document.getElementById("b4").value == "X" &&
    document.getElementById("b7").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b2").value == "X" &&
    document.getElementById("b5").value == "X" &&
    document.getElementById("b8").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b3").value == "X" &&
    document.getElementById("b6").value == "X" &&
    document.getElementById("b9").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b1").value == "X" &&
    document.getElementById("b5").value == "X" &&
    document.getElementById("b9").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b3").value == "X" &&
    document.getElementById("b5").value == "X" &&
    document.getElementById("b7").value == "X"
  ) {
    alert("Player 1 Won The Game");
    frefresh();
  }
};

const checkwintwo = () => {
  if (
    document.getElementById("b1").value == "0" &&
    document.getElementById("b2").value == "0" &&
    document.getElementById("b3").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b4").value == "0" &&
    document.getElementById("b5").value == "0" &&
    document.getElementById("b6").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b7").value == "0" &&
    document.getElementById("b8").value == "0" &&
    document.getElementById("b9").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b1").value == "0" &&
    document.getElementById("b4").value == "0" &&
    document.getElementById("b7").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b2").value == "0" &&
    document.getElementById("b5").value == "0" &&
    document.getElementById("b8").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b3").value == "0" &&
    document.getElementById("b6").value == "0" &&
    document.getElementById("b9").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b1").value == "0" &&
    document.getElementById("b5").value == "0" &&
    document.getElementById("b9").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  } else if (
    document.getElementById("b3").value == "0" &&
    document.getElementById("b5").value == "0" &&
    document.getElementById("b7").value == "0"
  ) {
    alert("Player 2 Won The Game");
    frefresh();
  }
};
const frefresh = () => {
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
};
