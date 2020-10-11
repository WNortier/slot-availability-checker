function SlotChecker(availabilityData) {
  const dates = availabilityData.map((data, index) => {});
  const helper = {
    fullDay: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    travelBuffer: 0,
    sameDateBuffer: 0,
    maximumJobLength: 5,
    minimumJobLength: 1,
    currentDate: "2016-05-19T11:27:00",
    calcTimeRequired: (travelBuffer, jobLength) => {
      return travelBuffer + jobLength;
    },
    calcTimeSlotLength: (time, availabilty) => {
      const timeSlot = availabilty.indexOf(time);
      return availabilty[++timeSlot] - availabilty[timeSlot];
    },
    formatDate: (input) => {
      let date = new Date(input);
      let year = date.getUTCFullYear();
      let month;
      let day;
      console.log(String(date.getMonth()).length);

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

  function handleSameDateBuffer(time, jobLength, date, availabilty) {
    const jobDateFormatted = helper.formatDate(date);
    const currentDateFormatted = helper.formatDate(helper.currentDate);

    if (jobDateFormatted === currentDateFormatted) {
      helper.sameDateBuffer = 2;
      return helper.sameDateBuffer;
    } else {
      return 0;
    }
  }

  function handleTravelBuffer(time, jobLength, date, availabilty) {
    if (
      time === helper.fullDay[0] ||
      time === helper.fullDay[helper.fullDay.length - 1]
    ) {
      helper.travelBuffer = 0;
      return helper.travelBuffer;
    } else {
      helper.travelBuffer = 2;
      return helper.travelBuffer;
    }
  }

  function isDateListed(time, jobLength, date, availabilty) {
    const jobDateFormatted = helper.formatDate(date);
    const availabilityDates = availabilityData.map((d) => {
      return d.Date;
    });
    return availabilityDates.includes(jobDateFormatted);
  }

  function isSlotListed(time, jobLength, date, availabilty) {
    const jobDateFormatted = helper.formatDate(date);
    const selectedDate = availabilityData.find((d) => {
      return d.Date === jobDateFormatted;
    });
    return selectedDate.HoursAvailable.includes(time);
  }

  return {
    handleSameDateBuffer,
    handleTravelBuffer,
    isDateListed,
    isSlotListed,
  };
}
