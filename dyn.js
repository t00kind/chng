window.addEventListener("load", function() {
  this.document.getElementById('b').addEventListener("click", function() {
    window.location.href = "https://4ng.world/";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const bad = ["Нет сил", "Нет времени", "Плохие условия для жизни", "Усталость", "Апатия", "Ничего не получается", "Низкая самооценка", "Мечта это только идея, мертвая", "Безысходность", "Лень", "Все остается прежним"];
    let index = 0;
    let wordElement = document.getElementById("pain");

    function changeWord() {
        wordElement.textContent = bad[index];
        index = (index + 1) % bad.length;
    }

    setInterval(changeWord, 700);
});

window.addEventListener('scroll', function() {
    let element = document.getElementById('logo');
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let windowHeight = 500;
    if (element.textContent == "CHNG") {
      this.document.getElementById('b').classList.add('blurred');
      this.document.getElementById('b').style.backgroundColor = "#0304064f";
  }
    let opacity = 1 - (scrollTop / windowHeight);
    element.style.opacity = opacity;
    
    if (opacity < 0.1) {
      element.textContent = "changing";
      opacity = 0.1;
      element.style.opacity = opacity;
    }
    
    if (element.textContent == "changing") {
      let newOpacity = parseFloat(element.getAttribute('data-opacity')) || opacity;
      newOpacity += 0.05;
      if (newOpacity >= 1) {
        newOpacity = 1;
        element.textContent = "CHNG";

      }
      element.setAttribute('data-opacity', newOpacity);
      element.style.opacity = newOpacity;
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const what = ["yourself", "world", "life"];
    let index = 0;
    let wordElement = document.getElementById("what");

    function changeWord() {
        if (what[index] == "yourself") {
            document.getElementById("r4").textContent = "change ";

        }
        else {
            document.getElementById("r4").textContent = "change the ";
        }
        wordElement.textContent = what[index];
        index = (index + 1) % what.length;
    }

    setInterval(changeWord, 2000);
});