document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");
  var newForm = document.getElementById("myform");

  newForm.addEventListener("submit", function (event) {
    // prevents form from refreshing.
    event.preventDefault();

    var newImge = document.createElement("img");
    var div = document.createElement("div");
    var textTop = document.getElementById("text-top").value;
    var textBottom = document.getElementById("text-bottom").value;
    var url = document.getElementById("URL").value;
    var h1top = document.createElement("h1");
    h1top.setAttribute("class", "text-top");
    var h1bottom = document.createElement("h1");
    h1bottom.setAttribute("class", "text-bottom");
    newImge.src = url;
    h1top.innerText = textTop;
    h1bottom.innerText = textBottom;
    div.appendChild(newImge);
    div.appendChild(h1top);
    div.appendChild(h1bottom);
    div.setAttribute("class", "wrapper");
    container.appendChild(div);

    // clears url, top and bottom text.

    var url = (document.getElementById("URL").value = "");
    var textTop = (document.getElementById("text-top").value = "");
    var textBottom = (document.getElementById("text-bottom").value = "");

    // clears Imgaes once clicked on.

    div.addEventListener("click", function (event) {
      div.removeChild(h1bottom);
      div.removeChild(h1top);
      div.removeChild(newImge);
    });
  });
});
