"use server";

import { prisma } from "@/lib/prisma";

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            name: true,
            institution: true,
            institutionRole: true,
            phoneNumber: true,
          },
        },
      },
    });
    return appointments;
  } catch {
    throw new Error("Failed to fetch appointments");
  }
}
