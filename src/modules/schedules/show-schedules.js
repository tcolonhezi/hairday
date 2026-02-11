import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    //<li>
    //   <strong>19:00</strong>
    //   <span>Rodrigo Gonçalves</span>
    //   <img src="./src/assets/cancel.svg" alt="Cancelar" class="cancel-icon" />
    //</li>

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.src = "./src/assets/cancel.svg";
      cancelIcon.alt = "Cancelar";

      const hourOfSchedule = dayjs(schedule.when);

      time.textContent = hourOfSchedule.format("HH:mm");
      name.textContent = schedule.name;

      //Adiciona tempo, nome e icone no item
      item.appendChild(time);
      item.appendChild(name);
      item.appendChild(cancelIcon);

      const hour = hourOfSchedule.hour();
      if (hour < 12) {
        periodMorning.appendChild(item);
      } else if (hour >= 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Não foi possivel carregar os agendamentos");
    console.log(error);
  }
}
