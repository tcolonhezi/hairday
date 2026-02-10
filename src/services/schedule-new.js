import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        when,
      }),
    }).then((response) => response.json());

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log("Erro ao enviar agendamento");
    alert("Não foi possível enviar o agendamento.");
  }
}
