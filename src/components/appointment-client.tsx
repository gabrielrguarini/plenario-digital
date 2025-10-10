"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppointmentDetailsDialog } from "@/components/appointment-details-dialog";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { EyeIcon, CalendarIcon } from "lucide-react";
import { AppointmentWithUser } from "@/lib/shared.types";

export function AppointmentsClient({
  appointments,
}: {
  appointments: AppointmentWithUser[];
}) {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentWithUser | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (appointment: AppointmentWithUser) => {
    setSelectedAppointment(appointment);
    setDialogOpen(true);
  };

  const getStatusBadge = (status: AppointmentWithUser["status"]) => {
    switch (status) {
      case "APPROVED":
        return <Badge variant="default">Aprovado</Badge>;
      case "REJECTED":
        return <Badge variant="destructive">Rejeitado</Badge>;
      case "PENDING":
        return <Badge variant="secondary">Pendente</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <CalendarIcon className="text-primary size-8" />
            <h1 className="text-4xl font-bold text-balance">
              Gerenciar Agendamentos
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Visualize e gerencie todos os agendamentos solicitados
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border bg-white shadow-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Instituição</TableHead>
                <TableHead>Finalidade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="py-8 text-center">
                    <p className="text-muted-foreground">
                      Nenhum agendamento encontrado
                    </p>
                  </TableCell>
                </TableRow>
              ) : (
                appointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      {format(new Date(appointment.start), "dd/MM/yyyy", {
                        locale: ptBR,
                      })}
                    </TableCell>
                    <TableCell>
                      {format(new Date(appointment.start), "HH:mm", {
                        locale: ptBR,
                      })}{" "}
                      -{" "}
                      {format(new Date(appointment.end), "HH:mm", {
                        locale: ptBR,
                      })}
                    </TableCell>
                    <TableCell>{appointment.responsible}</TableCell>
                    <TableCell>{appointment.user.institution}</TableCell>
                    <TableCell className="max-w-xs truncate">
                      {appointment.purpose}
                    </TableCell>
                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewDetails(appointment)}
                        className="gap-2"
                      >
                        <EyeIcon className="size-4" />
                        Ver detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <AppointmentDetailsDialog
        appointment={selectedAppointment}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
