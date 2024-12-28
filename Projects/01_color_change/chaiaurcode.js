const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
    }
  });
});
