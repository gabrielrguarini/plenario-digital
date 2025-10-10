import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentCard } from "@/components/appointament-card";
import { Appointment } from "@/generated/prisma";

export const MeusAgendamentos = ({
  appointaments,
}: {
  appointaments: Appointment[];
}) => {
  const pendingCount = appointaments.filter(
    (appointament) => appointament.status === "PENDING",
  ).length;
  const approvedCount = appointaments.filter(
    (appointament) => appointament.status === "APPROVED",
  ).length;
  const rejectedCount = appointaments.filter(
    (appointament) => appointament.status === "REJECTED",
  ).length;

  return (
    <div className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-foreground font-serif text-4xl font-bold">
              Meus Agendamentos
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Acompanhe o status das suas solicitações de agendamento
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Pendentes
                    </p>
                    <p className="mt-1 text-2xl font-bold">{pendingCount}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Aprovados
                    </p>
                    <p className="mt-1 text-2xl font-bold">{approvedCount}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Rejeitados
                    </p>
                    <p className="mt-1 text-2xl font-bold">{rejectedCount}</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {appointaments.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="text-muted-foreground mx-auto h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">
                  Nenhum agendamento encontrado
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Você ainda não possui solicitações de agendamento.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {appointaments
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
