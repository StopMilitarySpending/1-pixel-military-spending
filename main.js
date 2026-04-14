var military = document.getElementById('military');
var military_counter = document.getElementById('military-counter');
var militaryCounterStart = document.getElementById('military-counter-start');

var money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

var thousand = new Intl.NumberFormat('en-US');

window.addEventListener('scroll', function(){
  update_military_counter();
});

function update_military_counter() {
  if (military_viewable()) {
    if (military_counter_viewable()) {
      // Calculate based on scroll position
      // Every 2 pixels = $1 million (since 10 pixels = $5 million)
      let militarySpent = (window.scrollX - military.offsetLeft + 175) * 500000;
      let displayValue = (militarySpent < 2710000000000) ? money.format(militarySpent) : "$2,710,000,000,000.00";
      military_counter.innerHTML = displayValue;
    }
    else {
      military_counter.innerHTML = '';
    }
  }
  
  function military_viewable() {
    return window.scrollX < military.offsetLeft + military.offsetWidth + 100;
  }
  
  function military_counter_viewable() {
    return militaryCounterStart.offsetLeft - window.scrollX < (window.innerWidth);
  }
}
