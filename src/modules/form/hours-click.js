export let hourClicked = null;

export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // limpa as classes de todas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      selected.target.classList.add("hour-selected");
      hourClicked = selected.target.dataset.hour;
    });
  });
}
