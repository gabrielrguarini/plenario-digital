"use server";

import { prisma } from "@/lib/prisma";

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany();
    return appointments;
  } catch {
    throw new Error("Failed to fetch appointments");
  }
}
