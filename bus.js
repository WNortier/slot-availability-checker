function Bus() {

	var passengers = 0;

	function board(boarded){
		if (boarded) {
			passengers++;
		}
	}

	function passengerCount() {
		return passengers
	}

	return {
		board,
		passengerCount
	}
}

var bus = new Bus();

bus.board(singleTicket(5, 5));
bus.board(singleTicket(5, 4));
bus.board(singleTicket(5, 10));
bus.board(singleTicket(5, 3));

var weeklyTicket = WeeklyBusTicket(1);

bus.board(weeklyTicket.scan());

var bus2 = new Bus();
bus2.board(weeklyTicket.scan());