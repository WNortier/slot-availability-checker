function WeeklyBusTicket(rideCount) {
  var rides = rideCount || 10;

  //   const currentDate = "2016-05-18T11:27:00";
  const fullDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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

  const dates = availabilityData.map((data, index) => {
    // console.log(new Date(data.Date));
  });

  let travelBuffer = 0;
  const maximumJobLength = 5;
  const minimumJobLength = 1;

  function checkSlotAvailability(time, jobLength, date, availabilty) {
    const availabilityDate = new Date(date);
    const currentDate = new Date("2016-05-18T11:27:00");
    const availabilityDateFormatted = `${availabilityDate.getUTCFullYear()}-0${availabilityDate.getMonth()}-${availabilityDate.getDate()}`;
    const currentDateFormatted = `${currentDate.getUTCFullYear()}-0${currentDate.getMonth()}-${currentDate.getDate()}`;

    // console.log(availabilityDateFormatted);
    // console.log(currentDateFormatted);

    if (availabilityDateFormatted == currentDateFormatted) {
      return true;
    } else {
      return false;
    }
  }

  function checkSlotAvailabilityTwo(time, jobLength, date, availabilty) {
    const availabilityDate = new Date(date);
    const currentDate = new Date("2016-05-18T11:27:00");
    const availabilityDateFormatted = `${availabilityDate.getUTCFullYear()}-0${availabilityDate.getMonth()}-${availabilityDate.getDate()}`;
    const currentDateFormatted = `${currentDate.getUTCFullYear()}-0${currentDate.getMonth()}-${currentDate.getDate()}`;

    if (time == fullDay[0] || time == fullDay[8]) {
      console.log("no buffer added");
    } else {
      travelBuffer += 2;
    }

    if (availabilityDateFormatted == currentDateFormatted) {
      return true;
    } else {
      return false;
    }
  }

  function returnBuffer() {
    // console.log(travelBuffer);
    return travelBuffer;
  }

  return {
    checkSlotAvailability,
    checkSlotAvailabilityTwo,
    returnBuffer,
  };
}
