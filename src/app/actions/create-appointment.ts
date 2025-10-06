"use server";
import { prisma } from "@/lib/prisma";
import { getLocalDate } from "@/lib/utils";
import { AppointmentFormData } from "@/lib/validations";
import { getUnavailableDates } from "./get-unavailable-dates";
import { auth } from "@/auth";
import { headers } from "next/headers";

export async function createAppointment({
  date,
  startTime,
  endTime,
  purpose,
  expectedGuests,
  extraRequests,
  equipment,
}: AppointmentFormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  try {
    const unavailable = await getUnavailableDates();
    if (
      !unavailable.some(
        (d) =>
          d.toDateString() === date.toDateString() ||
          date > new Date(new Date().getFullYear(), 11, 31)
      )
    ) {
      if (!session?.user) {
        throw new Error("User not authenticated");
      }
      const appointment = await prisma.appointment.create({
        data: {
          userId: session.user.id,
          start: getLocalDate(date, startTime),
          end: getLocalDate(date, endTime),
          purpose,
          responsible: session.user.name,
          expectedGuests,
          extraRequest: extraRequests,
          wifi: equipment.wifi,
          projector: equipment.projector,
          soundSystem: equipment.soundSystem,
        },
      });

      return appointment;
    }
    throw new Error("Date is unavailable");
  } catch (error) {
    throw new Error(`Failed to create appointment: ${error}`);
  }
}
