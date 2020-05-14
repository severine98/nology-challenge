window.onload = switchColourParasTitle = () => {
  let button = document.getElementById("button");
  button.onclick = () => {
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

getResultFromMoodScore = () => {
  let score = document.getElementById("mood").value;
  giveMood = (score) => {
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
  };
  giveMood(score);
};

thankYouForYourMessage = () => {
  let submit = document.getElementById("submit");
  submit.onclick = () => {
    document.getElementById("letsChat").innerHTML =
      "Thanks for your message! Keep a look out for your inbox!";
    document.getElementById("letsChat").style.width = "300px";
    document.getElementById("letsChat").style.left = "92px";
    document.getElementById("letsChat").style.bottom = "495px";
  };
};

var prevScrollpos = window.pageYOffset;
window.onscroll = navbarDisapearOnScroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
