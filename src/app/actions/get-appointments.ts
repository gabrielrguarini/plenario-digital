"use server";

import { prisma } from "@/lib/prisma";

export async function getAppointments() {
  const appointments = await prisma.appointment.findMany();
  return appointments;
}
