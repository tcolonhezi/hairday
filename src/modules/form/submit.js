import dayjs from "dayjs";
import { hourClicked } from "./hours-click";
import { scheduleNew } from "../../services/schedule-new";

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

    const when = dayjs(selectedDate)
      .add(hourClicked.split(":")[0], "hour")
      .add(hourClicked.split(":")[1], "minute");

    const id = new Date().getTime();

    console.log({
      id,
      clientName,
      when: when,
    });

    await scheduleNew({ id, name: clientName, when });
  } catch (error) {
    alert(`Não foi possível realizar o agendamento!`);
    console.log(error);
  }
};
