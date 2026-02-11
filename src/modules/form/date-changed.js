import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../schedules/hours-load";
import { schedulesDay } from "../schedules/load";

const selectedDateInput = document.getElementById("date");

selectedDateInput.addEventListener("input", async () => {
  schedulesDay();
});
