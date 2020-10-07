let tripsElem = document.querySelector('.trips');
let tripsLeftCount = document.querySelector('.leftCounter');

const weeklyBusTicket = WeeklyBusTicket();
tripsLeftCount.textContent = weeklyBusTicket.ridesLeft();

tripsElem.addEventListener('change', function(evt) {
	// alert(evt.target.value);
	evt.target.disabled = true;
	weeklyBusTicket.scan();
	tripsLeftCount.textContent = weeklyBusTicket.ridesLeft();
});