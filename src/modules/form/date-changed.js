import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../schedules/hours-load";

const selectedDateInput = document.getElementById("date");

selectedDateInput.addEventListener("input", async () => {
  const dailySchedules = await scheduleFetchByDay({
    date: selectedDateInput.value,
  });

  //Exibe agendamentos

  hoursLoad({ date: selectedDateInput.value });
});
