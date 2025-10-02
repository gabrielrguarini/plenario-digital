import { z } from "zod"

export const appointmentSchema = z
  .object({
    date: z.string().min(1, "Data é obrigatória"),
    startTime: z.string().min(1, "Horário de início é obrigatório"),
    endTime: z.string().min(1, "Horário de término é obrigatório"),
    purpose: z.string().min(3, "Finalidade deve ter no mínimo 3 caracteres"),
    responsible: z.string().min(3, "Nome do responsável deve ter no mínimo 3 caracteres"),
    position: z.string().min(2, "Cargo deve ter no mínimo 2 caracteres"),
    institution: z.string().min(2, "Instituição deve ter no mínimo 2 caracteres"),
    expectedGuests: z.number().min(1, "Número de convidados deve ser no mínimo 1").max(1000, "Número muito alto"),
    extraRequests: z.string().optional(),
    equipment: z.object({
      projector: z.boolean(),
      microphone: z.boolean(),
      whiteboard: z.boolean(),
      videoConference: z.boolean(),
    }),
  })
  .refine(
    (data) => {
      const start = data.startTime.split(":").map(Number)
      const end = data.endTime.split(":").map(Number)
      const startMinutes = start[0] * 60 + start[1]
      const endMinutes = end[0] * 60 + end[1]
      return endMinutes > startMinutes
    },
    {
      message: "Horário de término deve ser posterior ao horário de início",
      path: ["endTime"],
    },
  )

export type AppointmentFormData = z.infer<typeof appointmentSchema>
