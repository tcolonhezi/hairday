import { hoursLoad } from "./hours-load";

const selectedDateInput = document.getElementById("date");

export function schedulesDay() {
  //Busca os agendamentos do dia
  const dateSelected = selectedDateInput.value;

  hoursLoad({ date: dateSelected });
  //Busca os horários disponíveis no futuro e que não esteja agendado
}
