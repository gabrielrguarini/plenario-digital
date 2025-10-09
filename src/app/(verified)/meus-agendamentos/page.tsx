"use server";

import { getAppointmentsByUser } from "@/app/actions/get-appointments-by-user";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { MeusAgendamentos } from "./meus-agendamentos";

export default async function MeusAgendamentosPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  const appointments = await getAppointmentsByUser({ userId: session.user.id });
  return (
    <div>
      <MeusAgendamentos appointaments={appointments} />
    </div>
  );
}
