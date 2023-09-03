let faqQues = document.querySelectorAll(".faq-q");
let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".ans");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < faqQues.length; i++) {
  faqQues[i].addEventListener("click", function () {
    for (let j = 0; j < answer.length; j++) {
      if (answer[j].classList.contains("active")) {
        answer[j].classList.remove("active");
        arrow[j].style.rotate = "360deg";
      }
    }
    answer[i].classList.add("active");
    arrow[i].style.rotate = "180deg";
  });
}

function myFunction(x) {
  if (x.matches) {
    document.querySelector(".box").remove();
    document.querySelector("section").style.flexDirection = "column";
    document.querySelector("section").style.width = "350px";
    document.querySelector("section").style.padding = "20px";
    document.querySelector("section").style.marginTop = "200px";
    document.querySelector(".images").style.overflow = "visible";
    document.querySelector(".m-image").src =
      "images/illustration-woman-online-mobile.svg";
    document.querySelector(".m-image").style.left = "0";
    document.querySelector(".m-image").style.top = "-160px";
    document.querySelector(".images").style.height = "120px";
    document.querySelector("h1").style.fontSize = "34px";
    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("h1").style.marginBottom = "15px";
    faqQues.forEach((element) => {
      element.style.marginTop = "15px";
    });
  } else {
  }
}
var x = window.matchMedia("(max-width: 375px)");
myFunction(x);
x.addListener(myFunction);
