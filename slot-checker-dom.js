const testBtn = document.querySelector("#test");
// var templateSource = document.querySelector(".generateTemplate").innerHTML;
// var userTemplate = Handlebars.compile(templateSource);
const calcTimesBtn = document.querySelector("#calc-times");
const calcDateBuffer = document.querySelector("#calc-date-buffer");
const calcIsDateListedBtn = document.querySelector("#calc-is-date-listed");
const calctimeslotBtn = document.querySelector("#calc-is-slot-listed");
const calcIsJobLengthGreaterThanTimeslotBtn = document.querySelector(
  "#calc-is-job-length"
);

const timeslot = document.querySelector("#timeslot");
const jobLength = document.querySelector("#jobLength");
const date = document.querySelector(".date");
const availability = document.querySelector("#availability");

const datesBufferResult = document.querySelector("#dates-buffer-result");
const timeResult = document.querySelector("#time-result");
const isDateListedResult = document.querySelector("#is-date-listed-result");
const timeslotResult = document.querySelector("#is-slot-listed-result");
const isJoblengthGreaterResult = document.querySelector(
  "#is-jobLength-greater-result"
);
const slotChecker = SlotChecker();

testBtn.addEventListener("click", () => {
  console.log(timeslot.value);
  console.log(isDateListed.value);
  console.log(date.value);
  console.log(timeslot.value);
});
calcDateBuffer.addEventListener("click", () => {
  datesBufferResult.textContent = slotChecker.handleSameDateBuffer(
    timeslot.value,
    jobLength.value,
    date.value,
    [9, 10, 14, 15, 16, 17]
  );
});
calcTimesBtn.addEventListener("click", () => {
  timeResult.textContent = slotChecker.handleTravelBuffer(
    timeslot.value,
    jobLength.value,
    date.value,
    [9, 10, 14, 15, 16, 17]
  );
});
calcIsDateListedBtn.addEventListener("click", () => {
  isDateListedResult.textContent = slotChecker.isDateListed(
    timeslot.value,
    jobLength.value,
    date.value,
    [9, 10, 14, 15, 16, 17]
  );
});
calctimeslotBtn.addEventListener("click", () => {
  timeslotResult.textContent = slotChecker.isSlotListed(
    timeslot.value,
    jobLength.value,
    date.value,
    [9, 10, 14, 15, 16, 17]
  );
});
calcIsJobLengthGreaterThanTimeslotBtn.addEventListener("click", () => {
  isJoblengthGreaterResult.textContent = slotChecker.isTimeslotLengthGreatherThanJobLength(
    timeslot.value,
    jobLength.value,
    date.value,
    [9, 10, 14, 15, 16, 17]
  );
});
