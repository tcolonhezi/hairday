import dayjs from "dayjs";
import { schedulesDay } from "./schedules/load";
document.addEventListener("DOMContentLoaded", function () {
  carregaSelectedDateInput();
  schedulesDay();
});

function carregaSelectedDateInput() {
  const selectedDateInput = document.getElementById("date");

  const dataAtualLocale = dayjs().format("YYYY-MM-DD");

  selectedDateInput.value = dataAtualLocale;
  selectedDateInput.min = dataAtualLocale;
}
