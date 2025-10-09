"use server";

import { Status } from "@/generated/prisma";
import { getAppointment } from "./get-appointment";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateAppointmentStatus({
  appointmentId,
  status,
  rejectionReason,
}: {
  appointmentId: string;
  status: Status;
  rejectionReason?: string;
}) {
  try {
    const appointment = await getAppointment({ appointmentId });
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    const updatedAppointment = await prisma.appointment.update({
      where: { id: appointmentId },
      data: {
        status,
        rejectionReason: status === "REJECTED" ? rejectionReason : null,
        reviewedAt: new Date(),
      },
    });
    revalidatePath("/agendamentos");
    return updatedAppointment;
  } catch (error) {
    console.error("Failed to update appointment status:", error);
    throw new Error("Failed to update appointment status");
  }
}
