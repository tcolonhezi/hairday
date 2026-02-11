import dayjs from "dayjs";
import { hourClicked } from "./hours-click";
import { scheduleNew } from "../../services/schedule-new";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { schedulesDay } from "../schedules/load";

dayjs.extend(utc);
dayjs.extend(timezone);

const form = document.querySelector("form");
const inputSelectedDate = document.getElementById("date");
const inputName = document.getElementById("client");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const clientName = inputName.value.trim();
    const selectedDate = inputSelectedDate.value;

    if (!clientName) {
      throw new Error("Nome não preenchido");
    }
    if (!selectedDate) {
      throw new Error("Data não selecionada");
    }
    if (!hourClicked) {
      throw new Error("Horário não selecionado");
    }

    const [hours, minutes] = hourClicked.split(":");

    const when = dayjs(selectedDate)
      .tz("America/Sao_Paulo", true)
      .hour(parseInt(hours))
      .minute(parseInt(minutes))
      .second(0)
      .millisecond(0);

    const id = new Date().getTime();

    // console.log({
    //   id,
    //   clientName,
    //   when: when.toISOString(),
    // });

    await scheduleNew({ id, name: clientName, when });
  } catch (error) {
    alert(`Não foi possível realizar o agendamento!`);
    console.log(error);
  } finally {
    inputName.value = "";
    schedulesDay();
  }
};
