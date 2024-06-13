document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("header ul li a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      cerrarMenu();
    });
  });
});

function cerrarMenu() {
  var chk = document.getElementById("chk1");
  if (chk.checked) {
    chk.checked = false;
  }
}
