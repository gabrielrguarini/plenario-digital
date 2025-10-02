"use server"

import type { Appointment } from "./types"
import { appointmentSchema } from "./validations"

// Simulated database - in production, replace with actual database calls
function getAppointments(): Appointment[] {
  // This would be a database query in production
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("appointments")
    return stored ? JSON.parse(stored) : []
  }
  return []
}

function saveAppointment(appointment: Appointment) {
  // This would be a database insert in production
  if (typeof window !== "undefined") {
    const appointments = getAppointments()
    appointments.push(appointment)
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }
}

export async function getUnavailableDates() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // In production, this would query the database for all booked dates
  // For now, return some sample unavailable dates
  const today = new Date()
  const unavailableDates: string[] = [
    new Date(today.getFullYear(), today.getMonth(), 15).toISOString().split("T")[0],
    new Date(today.getFullYear(), today.getMonth(), 20).toISOString().split("T")[0],
    new Date(today.getFullYear(), today.getMonth(), 25).toISOString().split("T")[0],
  ]

  return { success: true, dates: unavailableDates }
}

export async function checkTimeSlotAvailability(date: string, startTime: string, endTime: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  // In production, check database for overlapping appointments
  // For demo purposes, we'll just return available
  return { success: true, available: true }
}

export async function createAppointment(data: unknown) {
  try {
    // Validate the data
    const validatedData = appointmentSchema.parse(data)

    // Check for time slot availability
    const availability = await checkTimeSlotAvailability(
      validatedData.date,
      validatedData.startTime,
      validatedData.endTime,
    )

    if (!availability.available) {
      return {
        success: false,
        error: "Este horário já está reservado. Por favor, escolha outro horário.",
      }
    }

    // Create appointment object
    const appointment: Appointment = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date().toISOString(),
    }

    // In production, save to database
    // For demo, we'll just simulate success
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      success: true,
      message: "Agendamento realizado com sucesso!",
      appointment,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      }
    }
    return {
      success: false,
      error: "Erro ao criar agendamento. Por favor, tente novamente.",
    }
  }
}
