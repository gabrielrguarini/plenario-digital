"use server";

import { eachDayOfInterval, isWeekend } from "date-fns";
import { getAppointments } from "./get-appointments";
const fetchPublicHolidays = async ({
  year,
}: {
  year: string;
}): Promise<Date[]> => {
  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/feriados/v1/${year}`
    );
    if (!response.ok) throw new Error("Error fetching public holidays");
    const holidays = await response.json();
    return holidays.map((holiday: { date: string }) => new Date(holiday.date));
  } catch (error) {
    console.error("Error fetching public holidays:", error);
    throw new Error("Error fetching public holidays");
  }
};
const getWeekends = (start: Date, end: Date): Date[] => {
  const allDays = eachDayOfInterval({ start, end });
  return allDays.filter((day) => isWeekend(day));
};

export async function getUnavailableDates() {
  try {
    const appointments = await getAppointments();
    const unavailableDates = appointments.map(
      (appointment) => appointment.start
    );

    const today = new Date();
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    const weekends = getWeekends(today, endOfYear);
    unavailableDates.push(...weekends);

    const publicHolidays = await fetchPublicHolidays({
      year: today.getFullYear().toString(),
    });
    unavailableDates.push(...publicHolidays);

    return unavailableDates;
  } catch {
    throw new Error("Failed to fetch unavailable dates");
  }
}
