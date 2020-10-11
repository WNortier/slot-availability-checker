const availabilityData = [
  {
    Date: "2016-05-18",
    HoursAvailable: [9, 10, 11, 12, 13, 14, 17],
  },
  {
    Date: "2016-05-19",
    HoursAvailable: [9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    Date: "2016-05-20",
    HoursAvailable: [9, 10, 14, 15, 16, 17],
  },
  {
    Date: "2016-05-21",
    HoursAvailable: [9, 10, 11, 12, 13],
  },
  {
    Date: "2016-05-23",
    HoursAvailable: [13, 14, 15, 16],
  },
  {
    Date: "2016-05-24",
    HoursAvailable: [11, 12, 15, 16, 17],
  },
];

describe("When checking for available slots", function () {
  it("I should be able to calculate the added buffer for a slot on the same date.", function () {
    const slotChecker = new SlotChecker(availabilityData);
    assert.equal(
      0,
      slotChecker.handleSameDateBuffer(9, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      0,
      slotChecker.handleSameDateBuffer(9, 1, "2012-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      2,
      slotChecker.handleSameDateBuffer(8, 2, "2016-05-19", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      2,
      slotChecker.handleSameDateBuffer(9, 1, "2016-05-19", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
  });
  it("I should be able to calculate the travel buffer.", function () {
    const slotChecker = new SlotChecker(availabilityData);
    assert.equal(
      2,
      slotChecker.handleTravelBuffer(10, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      0,
      slotChecker.handleTravelBuffer(9, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      0,
      slotChecker.handleTravelBuffer(17, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
  });
});

describe("I should be able check if a slot is FULL", function () {
  it("I should be able to check if the date is listed under the availabilityData", function () {
    const slotChecker = new SlotChecker(availabilityData);
    assert.equal(
      "AVAILABLE",
      slotChecker.isDateListed(18, 1, "2016-05-21", [9, 10, 14, 15, 16, 17])
    );
    assert.equal(
      "AVAILABLE",
      slotChecker.isDateListed(18, 1, "2016-05-18", [9, 10, 14, 15, 16, 17])
    );
    assert.equal(
      "FULL",
      slotChecker.isDateListed(18, 1, "2016-05-22", [9, 10, 14, 15, 16, 17])
    );
  });
  it("I should be able to check if the slot is listed for the date entered", function () {
    const slotChecker = new SlotChecker(availabilityData);
    assert.equal(
      "AVAILABLE",
      slotChecker.isSlotListed(10, 1, "2016-05-18", [9, 10, 14, 15, 16, 17])
    );
    assert.equal(
      "FULL",
      slotChecker.isSlotListed(8, 1, "2016-05-18", [9, 10, 14, 15, 16, 17])
    );
    assert.equal(
      "FULL",
      slotChecker.isSlotListed(18, 1, "2016-05-18", [9, 10, 14, 15, 16, 17])
    );
  });
});

describe("I should be able check if a slot is UNAVAILABLE", function () {
  it("I should be able to check if the date is listed under the availabilityData", function () {
    const slotChecker = new SlotChecker(availabilityData);
    assert.equal(
      "AVAILABLE",
      slotChecker.isTimeslotLengthGreatherThanJobLength(9, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
    assert.equal(
      "UNAVAILABLE",
      slotChecker.isTimeslotLengthGreatherThanJobLength(15, 1, "2016-05-18", [
        9,
        10,
        14,
        15,
        16,
        17,
      ])
    );
  });
});
