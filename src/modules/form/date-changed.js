import { hoursLoad } from "../schedules/hours-load";

const selectedDateInput = document.getElementById("date");

selectedDateInput.addEventListener("input", () => {
  hoursLoad({ date: selectedDateInput.value });
});
