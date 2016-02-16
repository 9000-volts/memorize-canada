/* Generates quizzing boxes. */
var generate = function (data) {
  return function () {
    var items = [];
    var container = document.querySelector("#items");
    var clear = function () {
      items.forEach(function(item) {
        item.value = "";
        item.className = "";
        items[0].focus();
      });
    }
    container.innerHTML = "";
    data.forEach(function (item, index) {
      var input = document.createElement("input");
      input.style.left = item.x + "px";
      input.style.top = item.y + "px";
      input.onkeydown = function (e) {
        if (e.keyCode === 13) {
          if (input.value.toLowerCase() === item.text) {
            input.className = "correct";
            items[(index + 1) % (items.length - 1)].focus();
          } else {
            clear();
          }
        }
      };
      items.push(input);
      container.appendChild(input);
    });
    items[0].focus();
    document.querySelector("#reveal").onclick = function () {
      data.forEach(function (item, index) {
        items[index].value = item.text;
      });
    };
    document.querySelector("#clear").onclick = clear;
  };
};
