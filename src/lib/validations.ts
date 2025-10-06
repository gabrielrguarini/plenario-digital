import { z } from "zod";

export const appointmentSchema = z
  .object({
    date: z.date({
      required_error: "Data é obrigatória",
      invalid_type_error: "Data inválida",
    }),
    startTime: z.string().min(1, "Horário de início é obrigatório"),
    endTime: z.string().min(1, "Horário de término é obrigatório"),
    purpose: z.string().min(3, "Finalidade deve ter no mínimo 3 caracteres"),
    expectedGuests: z
      .number()
      .min(1, "Número de convidados deve ser no mínimo 1")
      .max(1000, "Número muito alto"),
    extraRequests: z.string().optional(),
    equipment: z.object({
      projector: z.boolean(),
      wifi: z.boolean(),
      soundSystem: z.boolean(),
    }),
  })
  .refine(
    (data) => {
      const start = data.startTime.split(":").map(Number);
      const end = data.endTime.split(":").map(Number);
      const startMinutes = start[0] * 60 + start[1];
      const endMinutes = end[0] * 60 + end[1];
      return endMinutes > startMinutes;
    },
    {
      message: "Horário de término deve ser posterior ao horário de início",
      path: ["endTime"],
    }
  );

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
