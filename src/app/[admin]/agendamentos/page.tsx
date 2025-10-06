import { getAppointments } from "@/app/actions/get-appointments";
import { AppointmentsClient } from "@/components/appointment-client";

export default async function AgendamentosPage() {
  const appointments = await getAppointments();

  if (!appointments) {
    return <div>Nenhum agendamento encontrado.</div>;
  }

  return <AppointmentsClient appointments={appointments} />;
}
