import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert("Agendamento cancelado com sucesso!");
    return true;
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento.");
    return false;
  }
}
