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
    if (military_counter_viewable()) {
      // 1 pixel = $500,000
      let militarySpent = (window.scrollX - military.offsetLeft + 175) * 500000;
      if (militarySpent < 0) militarySpent = 0;
      if (militarySpent > 2887000000000) militarySpent = 2887000000000;
      military_counter.innerHTML = money.format(militarySpent);
    } else {
      military_counter.innerHTML = '';
    }
  }

  function military_viewable() {
    return window.scrollX < military.offsetLeft + military.offsetWidth + 100;
  }

  function military_counter_viewable() {
    return militaryCounterStart.offsetLeft - window.scrollX < window.innerWidth;
  }
}
