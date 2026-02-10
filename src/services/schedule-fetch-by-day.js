import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    const dailySchedules = data.filter((schedule) => {
      const daySchedule = dayjs(schedule.when).get("day");
      const searchDay = dayjs(date).get("day");

      return searchDay === daySchedule;
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamentos.");
  }
}
