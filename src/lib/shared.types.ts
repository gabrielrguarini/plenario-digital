import { Prisma } from "@/generated/prisma";

export type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: {
    user: {
      select: {
        name: true;
        institution: true;
        institutionRole: true;
        phoneNumber: true;
      };
    };
  };
}>;
