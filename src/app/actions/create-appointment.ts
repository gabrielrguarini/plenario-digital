"use server";
import { prisma } from "@/lib/prisma";
import { getLocalDate } from "@/lib/utils";
import { AppointmentFormData } from "@/lib/validations";
import { getUnavailableDates } from "./get-unavailable-dates";

export async function createAppointment({
  date,
  startTime,
  endTime,
  purpose,
  responsible,
  expectedGuests,
  extraRequests,
  equipment,
}: AppointmentFormData) {
  try {
    const unavailable = await getUnavailableDates();
    if (
      !unavailable.some(
        (d) =>
          d.toDateString() === date.toDateString() ||
          date > new Date(new Date().getFullYear(), 11, 31)
      )
    ) {
      const appointment = await prisma.appointment.create({
        data: {
          userId: "16b2f9fc-2ed0-43c6-8c67-16aa06c4992f", // Mocked user ID
          start: getLocalDate(date, startTime),
          end: getLocalDate(date, endTime),
          purpose,
          responsible,
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
  } catch {
    throw new Error("Failed to create appointment");
  }
}
