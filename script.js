let lastScrollTop = 0;

function isSmallScreen() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (!isSmallScreen()) {
    if (scrollTop > lastScrollTop) {
      document.querySelector("header").style.top = "-100px";
    } else {
      document.querySelector("header").style.top = "0";
    }
  } else {
    document.querySelector("header").style.top = "0";
  }

  lastScrollTop = scrollTop;
}

window.addEventListener("scroll", handleScroll);
