var military = document.getElementById('military');
var military_counter = document.getElementById('military-counter');
var militaryCounterStart = document.getElementById('military-counter-start');

var money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

window.addEventListener('scroll', function(){
  update_military_counter();
});

function update_military_counter() {
  if (military_viewable()) {
    let militarySpent = (window.scrollX - military.offsetLeft + 175) * 29740;
    if (militarySpent < 0) militarySpent = 0;
    if (militarySpent > 2887000000000) militarySpent = 2887000000000;
    military_counter.innerHTML = money.format(militarySpent);
    military_counter.classList.add('visible');
  } else {
    military_counter.classList.remove('visible');
    military_counter.innerHTML = '';
  }

  function military_viewable() {
    return window.scrollX >= military.offsetLeft - window.innerWidth &&
           window.scrollX < military.offsetLeft + military.offsetWidth + 100;
  }
}
