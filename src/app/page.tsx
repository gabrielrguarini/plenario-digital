"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { AppointmentForm } from "@/components/appointment-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <CalendarIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-balance">Sistema de Agendamento</h1>
          <p className="text-slate-600 text-lg text-balance">Agende seu espaço de forma rápida e prática</p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-slate-200">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl">Novo Agendamento</CardTitle>
              <CardDescription className="text-base">
                Preencha os dados abaixo para realizar seu agendamento. Todos os campos são obrigatórios, exceto
                solicitações extras.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm selectedDate={selectedDate} onSuccess={() => setSelectedDate(undefined)} />
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CalendarIcon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-blue-900">Informações Importantes</h3>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                    <li>Datas já reservadas aparecerão desabilitadas no calendário</li>
                    <li>O horário de término deve ser posterior ao horário de início</li>
                    <li>Você receberá uma confirmação após o agendamento</li>
                    <li>Em caso de dúvidas, entre em contato com a administração</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
