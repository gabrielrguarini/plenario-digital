export function getMockedUnavailableDates(): Date[] {
  const today = new Date();
  const unavailableDates: Date[] = [];

  // Add some sample unavailable dates (15th, 20th, and 25th of current month)
  unavailableDates.push(new Date(today.getFullYear(), today.getMonth(), 15));
  unavailableDates.push(new Date(today.getFullYear(), today.getMonth(), 20));
  unavailableDates.push(new Date(today.getFullYear(), today.getMonth(), 25));

  // Add some dates from next month
  unavailableDates.push(new Date(today.getFullYear(), today.getMonth() + 1, 5));
  unavailableDates.push(
    new Date(today.getFullYear(), today.getMonth() + 1, 12)
  );

  return unavailableDates;
}

export interface MockedAppointment {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  responsible: string;
  position: string;
  institution: string;
  expectedGuests: number;
  extraRequests?: string;
  equipment: {
    projector: boolean;
    soundSystem: boolean;
    wifi: boolean;
  };
  createdAt: string;
}

// Store appointments in memory for demo
const appointments: MockedAppointment[] = [];

export function saveAppointment(appointment: MockedAppointment) {
  appointments.push(appointment);
  console.log("Appointment saved:", appointment);
}

export function getAppointments(): MockedAppointment[] {
  return appointments;
}
