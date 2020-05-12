window.onload = function () {
  let button = document.getElementById("button");
  button.onclick = function () {
    let titles = document.getElementsByTagName("h4");
    for (let title of titles) {
      title.classList.toggle("click");
    }
    let paras = document.getElementsByTagName("p");
    for (let para of paras) {
      para.classList.toggle("click");
    }
  };
};

function fn1() {
  let score = document.getElementById("mood").value;
  function giveMood(score) {
    if (score <= 5) {
      return (document.getElementById("result").innerHTML =
        "Oh no! Let's turn that frown around!");
    } else if (score <= 7) {
      return (document.getElementById("result").innerHTML =
        "This website will make you feel even better!");
    } else {
      return (document.getElementById("result").innerHTML =
        "You are glowing! Keep it up!");
    }
  }
  giveMood(score);
}
