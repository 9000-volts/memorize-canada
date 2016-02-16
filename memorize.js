/* Generates quizzing boxes. */
var generate = function (data) {
  return function () {
    var items = [];
    var container = document.querySelector("#items");
    container.innerHTML = "";
    data.forEach(function (item, index) {
      var input = document.createElement("input");
      input.style.left = item.x + "px";
      input.style.top = item.y + "px";
      input.onkeydown = function (e) {
        if (e.keyCode === 13 && input.value.toLowerCase() === item.text) {
          input.className = "correct";
          items[index + 1 % items.length].focus();
        }
      };
      items.push(input);
      container.appendChild(input);
    });
    items[0].focus();
  };
};
