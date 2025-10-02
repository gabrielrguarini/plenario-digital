export interface Appointment {
  id: string
  date: string
  startTime: string
  endTime: string
  purpose: string
  responsible: string
  position: string
  institution: string
  expectedGuests: number
  extraRequests?: string
  equipment: {
    projector: boolean
    microphone: boolean
    whiteboard: boolean
    videoConference: boolean
  }
  createdAt: string
}
