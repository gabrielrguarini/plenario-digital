import { Appointment } from "@/generated/prisma";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Monitor,
  Users,
  Volume2,
  Wifi,
  XCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

const statusConfig = {
  PENDING: {
    label: "Pendente",
    variant: "warning" as const,
    icon: Clock,
    description: "Aguardando análise",
  },
  APPROVED: {
    label: "Aprovado",
    variant: "success" as const,
    icon: CheckCircle,
    description: "Seu agendamento foi aprovado",
  },
  REJECTED: {
    label: "Rejeitado",
    variant: "destructive" as const,
    icon: XCircle,
    description: "Seu agendamento foi rejeitado",
  },
};

export const AppointmentCard = ({
  appointment,
}: {
  appointment: Appointment;
}) => {
  const status = statusConfig[appointment.status];
  const StatusIcon = status.icon;

  const equipments = [
    { active: appointment.wifi, label: "Wi-Fi", icon: Wifi },
    { active: appointment.projector, label: "Projetor", icon: Monitor },
    { active: appointment.soundSystem, label: "Sistema de Som", icon: Volume2 },
  ].filter((appointment) => appointment.active);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{appointment.purpose}</CardTitle>
            <CardDescription className="mt-1.5">
              Responsável: {appointment.responsible}
            </CardDescription>
          </div>
          <Badge variant={status.variant} className="ml-4">
            <StatusIcon className="mr-1 h-3 w-3" />
            {status.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="text-muted-foreground h-4 w-4" />
            <span>
              {format(appointment.start, "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="text-muted-foreground h-4 w-4" />
            <span>
              {format(appointment.start, "HH:mm", { locale: ptBR })} -{" "}
              {format(appointment.end, "HH:mm", { locale: ptBR })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="text-muted-foreground h-4 w-4" />
            <span>{appointment.expectedGuests} convidados esperados</span>
          </div>
        </div>
        {equipments.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-medium">
              Equipamentos solicitados:
            </p>
            <div className="flex flex-wrap gap-2">
              {equipments.map((eq) => {
                const Icon = eq.icon;
                return (
                  <Badge key={eq.label} variant="outline" className="gap-1">
                    <Icon className="h-3 w-3" />
                    {eq.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
        {appointment.extraRequest && (
          <div>
            <p className="mb-1 text-sm font-medium">Solicitações adicionais:</p>
            <p className="text-muted-foreground text-sm">
              {appointment.extraRequest}
            </p>
          </div>
        )}
        {appointment.status === "REJECTED" && appointment.rejectionReason && (
          <div className="border-destructive/50 bg-destructive/10 rounded-lg border p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-destructive mt-0.5 h-4 w-4" />
              <div>
                <p className="text-destructive text-sm font-medium">
                  Motivo da rejeição:
                </p>
                <p className="text-destructive/90 mt-1 text-sm">
                  {appointment.rejectionReason}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="text-muted-foreground pt-2 text-xs">
          Solicitado em{" "}
          {format(appointment.createdAt, "dd/MM/yyyy 'às' HH:mm", {
            locale: ptBR,
          })}
        </div>
      </CardContent>
    </Card>
  );
};
