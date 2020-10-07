describe("When checking for available slots", function () {
  it("I should be able to check the availability of a timeslot.", function () {
    const weeklyBusTicket = new WeeklyBusTicket();
    assert.equal(
      true,
      weeklyBusTicket.checkSlotAvailability(9, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
  });
  it("I should be able to calculate the buffer.", function () {
    const weeklyBusTicket = new WeeklyBusTicket();
    weeklyBusTicket.checkSlotAvailabilityTwo(16, 1, "2016-05-18", [
      9,
      10,
      14,
      15,
      16,
      17,
    ]);
    console.log(weeklyBusTicket.returnBuffer());
    // assert.equal(2, weeklyBusTicket.returnBuffer());
  });

  //   it("should be able to use a bus ticket with more than one ride left", function () {
  //     const weeklyBusTicket = new WeeklyBusTicket();w
  //     assert.equal(10, weeklyBusTicket.ridesLeft());

  //     const canRide = weeklyBusTicket.scan();

  //     assert.equal(true, canRide);
  //     assert.equal(9, weeklyBusTicket.ridesLeft());
  //   });

  //   it("should only be able to travel 10 times on a ticket.", function () {
  //     const weeklyBusTicket = new WeeklyBusTicket();

  //     // ride the bus 10 times
  //     weeklyBusTicket.scan();
  //     assert.equal(9, weeklyBusTicket.ridesLeft());
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     weeklyBusTicket.scan();
  //     assert.equal(1, weeklyBusTicket.ridesLeft());

  //     const tenthTime = weeklyBusTicket.scan();

  //     assert.equal(true, tenthTime);

  //     //
  //     const canRide = weeklyBusTicket.scan();
  //     // // I can't ride 11 time on a ticket so the ticket will return false
  //     assert.equal(false, canRide);
  //     assert.equal(0, weeklyBusTicket.ridesLeft());
  //   });
});
