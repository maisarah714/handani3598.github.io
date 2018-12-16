function openNav() {
  document.getElementById("sidenavbar").style.width = "200px";
  document.getElementById("spansidenav").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidenavbar").style.width = "0";
  document.getElementById("spansidenav").style.visibility = "visible";
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
