let userHasScrolled = false;
window.onscroll = function (e) {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("activeHeader");
  } else {
    header.classList.remove("activeHeader");
  }

  //   console.log(window.innerHeight);
  console.log();
  //   console.log(document.body.offsetHeight);
};
