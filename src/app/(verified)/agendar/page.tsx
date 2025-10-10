"use server";
import { CalendarIcon } from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getUnavailableDates } from "@/app/actions/get-unavailable-dates";

export default async function AppointmentPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  const unavailableDates = await getUnavailableDates();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center md:mb-12">
          <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <CalendarIcon className="text-primary h-8 w-8" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-balance text-slate-900 md:text-4xl">
            Sistema de Agendamento
          </h1>
          <p className="text-lg text-balance text-slate-600">
            Agende seu espaço de forma rápida e prática
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl">Novo Agendamento</CardTitle>
              <CardDescription className="text-base">
                Preencha os dados abaixo para realizar seu agendamento. Todos os
                campos são obrigatórios, exceto solicitações extras.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm unavailableDates={unavailableDates} />
            </CardContent>
          </Card>
          <Card className="mt-6 border-blue-200 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <CalendarIcon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-blue-900">
                    Informações Importantes
                  </h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-blue-800">
                    <li>
                      Datas já reservadas aparecerão desabilitadas no calendário
                    </li>
                    <li>
                      O horário de término deve ser posterior ao horário de
                      início
                    </li>
                    <li>Você receberá uma confirmação após o agendamento</li>
                    <li>
                      Em caso de dúvidas, entre em contato com a administração
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
