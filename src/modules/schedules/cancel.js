import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

export function periodClick(item) {
  item.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("cancel-icon")) {
      return;
    }
    const item = event.target.closest("li");

    const { id } = item;

    if (id) {
      const isConfirm = confirm(
        "Tem certeza que deseja cancelar o agendamento?",
      );

      if (isConfirm) {
        try {
          const response = await scheduleCancel({ id });
          if (response) {
            item.remove();
            schedulesDay();
          }
        } catch (error) {
          console.log(error);
          alert("Não foi possível cancelar o agendamento.");
        } finally {
        }
      }
    }
  });
}

periods.forEach((period) => {
  periodClick(period);
});
