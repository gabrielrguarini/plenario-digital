"use server";
import { getAppointments } from "@/app/actions/get-appointments";
import { AppointmentsDataTable } from "./appointments-table";

export default async function AgendamentosPage() {
  const appointments = await getAppointments();

  if (!appointments) {
    return <div>Nenhum agendamento encontrado.</div>;
  }

  return <AppointmentsDataTable appointments={appointments} />;
}
