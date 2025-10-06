import { prisma } from "@/lib/prisma";

export async function getAppointment({
  appointmentId,
}: {
  appointmentId: string;
}) {
  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
    include: {
      user: {
        select: {
          name: true,
          institution: true,
          institutionRole: true,
        },
      },
    },
  });
  return appointment;
}
