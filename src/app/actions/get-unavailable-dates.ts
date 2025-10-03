"use server";

import { getAppointments } from "./get-appointments";

export async function getUnavailableDates() {
  const appointments = await getAppointments();
  const unavailableDates = appointments.map((appointment) => appointment.start);
  return unavailableDates;
}
