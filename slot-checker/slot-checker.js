function SlotChecker(inputData) {
  const availabilityDataObj = [
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

  let availabilityData = inputData || availabilityDataObj;

  const helper = {
    availabilty: [9, 10, 14, 15, 16, 17],
    jobLength: 0,
    time: 0,
    timeRequired: 0,
    timeSlotLength: 0,
    fullDay: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    travelBuffer: 0,
    sameDateBuffer: 0,
    maximumJobLength: 5,
    minimumJobLength: 1,
    currentDate: "2016-05-19T11:27:00",
    calcTimeRequired: (jobLength) => {
      helper.timeRequired =
        helper.travelBuffer + helper.sameDateBuffer + +jobLength;
      return helper.timeRequired;
    },
    calcTimeslotLength: (time, availabilty) => {
      let timeSlot = +availabilty.indexOf(+time);
      return availabilty[timeSlot + 1] - availabilty[timeSlot];
    },
    formatDate: (input) => {
      let date = new Date(input);
      let year = date.getUTCFullYear();
      let month;
      let day;

      if (String(date.getMonth()).length === 1) {
        month = `0${date.getMonth() + 1}`;
      } else {
        month = date.getMonth();
      }

      if (String(date.getDate()).length === 1) {
        day = `0${date.getDate()}`;
      } else {
        day = date.getDate();
      }

      return `${year}-${month}-${day}`;
    },
  };

  const handleSameDateBuffer = (time, jobLength, date, availabilty) => {
    const jobDateFormatted = helper.formatDate(date);
    const currentDateFormatted = helper.formatDate(helper.currentDate);

    if (jobDateFormatted === currentDateFormatted) {
      helper.sameDateBuffer = 2;
      return helper.sameDateBuffer;
    } else {
      return 0;
    }
  };

  const handleTravelBuffer = (time, jobLength, date, availability) => {
    if (
      +time == availability[0] ||
      +time == availability[availability.length - 1]
    ) {
      helper.travelBuffer = 0;
      return helper.travelBuffer;
    } else {
      helper.travelBuffer = 2;
      return helper.travelBuffer;
    }
  };

  const isDateListed = (time, jobLength, date, availabilty) => {
    const jobDateFormatted = helper.formatDate(date);

    const availabilityDates = availabilityData.map((d) => {
      return d.Date;
    });

    if (
      availabilityDates == undefined ||
      availabilityDates.includes(jobDateFormatted) === false
    ) {
      return "FULL";
    } else if (availabilityDates.includes(jobDateFormatted)) {
      return "AVAILABLE";
    }
  };

  const isSlotListed = (time, jobLength, date, availabilty) => {
    const jobDateFormatted = helper.formatDate(date);

    const selectedDate = availabilityData.find((d) => {
      return d.Date == jobDateFormatted;
    });

    if (
      selectedDate == undefined ||
      selectedDate.HoursAvailable.includes(+time) === false
    ) {
      return "FULL";
    } else if (selectedDate.HoursAvailable.includes(+time)) {
      return "AVAILABLE";
    }
  };

  const isTimeslotLengthGreatherThanJobLength = (
    time,
    jobLength,
    date,
    availabilty
  ) => {
    handleSameDateBuffer(time, jobLength, date, availabilty);
    handleTravelBuffer(time, jobLength, date, availabilty);
    helper.calcTimeRequired(jobLength);

    let timeslotLength = helper.calcTimeslotLength(time, availabilty);

    if (timeslotLength < helper.timeRequired) {
      return "UNAVAILABLE";
    } else {
      return "AVAILABLE";
    }
  };

  return {
    handleSameDateBuffer,
    handleTravelBuffer,
    isDateListed,
    isSlotListed,
    isTimeslotLengthGreatherThanJobLength,
  };
}
