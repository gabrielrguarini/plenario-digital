"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  BuildingIcon,
  UsersIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import { AppointmentWithUser } from "@/lib/shared.types";
import { Status } from "@/generated/prisma";
import { toast } from "sonner";
import { updateAppointmentStatus } from "@/app/actions/update-appointment-status";

interface AppointmentDetailsDialogProps {
  appointment: AppointmentWithUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AppointmentDetailsDialog({
  appointment,
  open,
  onOpenChange,
}: AppointmentDetailsDialogProps) {
  if (!appointment) return null;
  const handleChange = async ({
    appointmentId,
    status,
    rejectionReason,
  }: {
    appointmentId: string;
    status: Status;
    rejectionReason?: string;
  }) => {
    const updatedAppointment = await updateAppointmentStatus({
      appointmentId,
      status,
      rejectionReason,
    });
    if (!updatedAppointment) {
      toast.error("Erro ao atualizar o agendamento");
      return;
    }
    toast.success("Agendamento atualizado com sucesso");
  };

  const equipmentList = [
    { key: "wifi", label: "Wi-Fi", value: appointment.wifi },
    { key: "projector", label: "Projetor", value: appointment.projector },
    {
      key: "soundSystem",
      label: "Sistema de Som",
      value: appointment.soundSystem,
    },
  ];

  const selectedEquipment = equipmentList.filter((eq) => eq.value);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Detalhes do Agendamento
          </DialogTitle>
          <DialogDescription>
            Solicitado em{" "}
            {format(
              new Date(appointment.createdAt),
              "dd 'de' MMMM 'às' HH:mm",
              {
                locale: ptBR,
              },
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status */}
          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">
              Status
            </h3>
            <Badge
              variant={
                appointment.status === "APPROVED"
                  ? "default"
                  : appointment.status === "REJECTED"
                    ? "destructive"
                    : "secondary"
              }
            >
              {appointment.status === "APPROVED"
                ? "Aprovado"
                : appointment.status === "REJECTED"
                  ? "Rejeitado"
                  : "Pendente"}
            </Badge>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CalendarIcon className="text-primary mt-0.5 size-5" />
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Data
                </h3>
                <p className="text-base">
                  {format(
                    new Date(appointment.start),
                    "dd 'de' MMMM 'de' yyyy",
                    {
                      locale: ptBR,
                    },
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ClockIcon className="text-primary mt-0.5 size-5" />
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Horário
                </h3>
                <p className="text-base">
                  {format(new Date(appointment.start), "HH:mm", {
                    locale: ptBR,
                  })}{" "}
                  -{" "}
                  {format(new Date(appointment.end), "HH:mm", { locale: ptBR })}
                </p>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">
              Finalidade
            </h3>
            <p className="text-base">{appointment.purpose}</p>
          </div>

          {/* Responsible Person */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <UserIcon className="text-primary mt-0.5 size-5" />
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Responsável
                </h3>
                <p className="text-base">{appointment.responsible}</p>
                <p className="text-muted-foreground text-sm">
                  {appointment.user.institutionRole}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BuildingIcon className="text-primary mt-0.5 size-5" />
              <div>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Instituição
                </h3>
                <p className="text-base">{appointment.user.institution}</p>
              </div>
            </div>
          </div>

          {/* Expected Guests */}
          <div className="flex items-start gap-3">
            <UsersIcon className="text-primary mt-0.5 size-5" />
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">
                Número de Convidados
              </h3>
              <p className="text-base">{appointment.expectedGuests} pessoas</p>
            </div>
          </div>

          {/* Equipment */}
          {selectedEquipment.length > 0 && (
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium">
                Equipamentos Solicitados
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedEquipment.map((eq) => (
                  <Badge key={eq.key} variant="secondary">
                    {eq.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Extra Requests */}
          {appointment.extraRequest && (
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium">
                Solicitações Extras
              </h3>
              <p className="text-muted-foreground text-base">
                {appointment.extraRequest}
              </p>
            </div>
          )}
        </div>

        {appointment.status === "PENDING" && (
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => {
                handleChange({
                  appointmentId: appointment.id,
                  status: "REJECTED",
                  rejectionReason: "REPROVADO PELO ADMINISTRADOR",
                });
                onOpenChange(false);
              }}
              className="gap-2"
            >
              <XCircleIcon className="size-4" />
              Rejeitar
            </Button>
            <Button
              onClick={() => {
                handleChange({
                  appointmentId: appointment.id,
                  status: "APPROVED",
                });
                onOpenChange(false);
              }}
              className="gap-2"
            >
              <CheckCircleIcon className="size-4" />
              Aprovar
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
