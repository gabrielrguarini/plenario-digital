"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export const getAppointmentsByUser = async ({ userId }: { userId: string }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }

  const appointments = await prisma.appointment.findMany({
    where: {
      userId,
    },
  });
  return appointments;
};
