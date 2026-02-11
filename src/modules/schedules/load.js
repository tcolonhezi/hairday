import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "./hours-load";
import { schedulesShow } from "./show-schedules";

const selectedDateInput = document.getElementById("date");

export async function schedulesDay() {
  //Busca os agendamentos do dia
  const dateSelected = selectedDateInput.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date: dateSelected });
  //console.log(dailySchedules);
  console.log(dailySchedules);

  //Exibe os agendamos no aside
  schedulesShow({ dailySchedules });

  hoursLoad({ date: dateSelected, dailySchedules });
  //Busca os horários disponíveis no futuro e que não esteja agendado
}
