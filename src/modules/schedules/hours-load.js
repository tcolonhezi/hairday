import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "../form/hours-click";

const ulHours = document.querySelector(".hours");

export function hoursOpening({ date, dailySchedules }) {
  const unavailableHours = dailySchedules.map((hour) => {
    return dayjs(hour.when).format("HH:mm");
  });

  const opening = openingHours.map((hour) => {
    const [scheduleHour, scheduleMinutes] = hour.split(":");
    const isUnavailable = unavailableHours.includes(
      `${scheduleHour}:${scheduleMinutes}`,
    );

    const dateHour = dayjs(date)
      .add(scheduleHour, "hour")
      .add(scheduleMinutes, "minute");

    const isHourPast = dateHour.isBefore(dayjs());
    const available = !isHourPast && !isUnavailable;

    return {
      scheduleHour,
      scheduleMinutes,
      hour: dateHour.format("HH:mm"),
      available,
    };
  });
  return opening.sort((a, b) => {
    a.scheduleHour - b.scheduleHour;
  });
}

export function hourHeaderAdd({ title }) {
  const header = document.createElement("li");
  // <li data-period="morning" class="hour-period">Manhã</li>
  header.textContent = title;
  header.classList.add("hour-period");
  ulHours.appendChild(header);
}

export function hoursLoad({ date, dailySchedules }) {
  const opening = hoursOpening({ date, dailySchedules });
  ulHours.innerHTML = "";
  let lastPeriod = null;

  opening.forEach(({ scheduleHour, hour, available }) => {
    // <li data-period="morning" value="09:00" class="hour hour-available">
    //   09:00
    // </li>

    let period;
    let title;

    if (scheduleHour < 12) {
      period = "morning";
      title = "Manhã";
    } else if (scheduleHour < 18) {
      period = "afternoon";
      title = "Tarde";
    } else {
      period = "night";
      title = "Noite";
    }

    if (period !== lastPeriod) {
      hourHeaderAdd({ title });
      lastPeriod = period;
    }

    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.setAttribute(
      "data-period",
      scheduleHour < 12 ? "morning" : scheduleHour < 18 ? "afternoon" : "night",
    );
    li.dataset.hour = hour;
    li.setAttribute("value", hour);
    li.textContent = hour;

    ulHours.appendChild(li);
  });

  hoursClick();
}
