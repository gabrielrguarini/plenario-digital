"use server";
import { getAppointments } from "@/app/actions/get-appointments";
import { auth } from "@/auth";
import { AppointmentsClient } from "@/components/appointment-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AgendamentosPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  if (session.user.role !== "ADMIN") {
    redirect("/");
  }
  const appointments = await getAppointments();

  if (!appointments) {
    return <div>Nenhum agendamento encontrado.</div>;
  }

  return <AppointmentsClient appointments={appointments} />;
}
