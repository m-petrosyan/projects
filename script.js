
function start() {

  const colors = ['#f44336','#673ab7','#ff5722','#607d8b','#4CAF50','#E91E63','#795548','#3F51B5','#cddc39','#00BCD4']
  const listItems = document.querySelectorAll('.list li a');

  function makeRandomArr(a, b) {
    return Math.random() - 0.5;
  }
  colors.sort(makeRandomArr);

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseenter", function(event){this.style.backgroundColor =colors[i]});
  }
}
