"use client";
import { DataTable } from "@/components/ui/data-table";
import { AppointmentDetailsDialog } from "@/components/appointment-details-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AppointmentWithUser } from "@/lib/shared.types";
import { columns } from "./appointment-columns";
import { useEffect, useMemo, useState } from "react";

export function AppointmentsDataTable({
  appointments,
}: {
  appointments: AppointmentWithUser[];
}) {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentWithUser | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    const handleViewAppointment = (event: Event) => {
      const customEvent = event as CustomEvent<AppointmentWithUser>;
      setSelectedAppointment(customEvent.detail);
    };

    window.addEventListener("view-appointment", handleViewAppointment);
    return () => {
      window.removeEventListener("view-appointment", handleViewAppointment);
    };
  }, []);

  const filteredData = useMemo(() => {
    if (statusFilter === "all") return appointments;
    return appointments.filter(
      (appointment) => appointment.status === statusFilter,
    );
  }, [appointments, statusFilter]);

  return (
    <>
      <div className="mb-4">
        <Label htmlFor="status-filter">Filtrar por status</Label>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger id="status-filter" className="w-[200px]">
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="PENDING">Pendente</SelectItem>
            <SelectItem value="APPROVED">Aprovado</SelectItem>
            <SelectItem value="REJECTED">Rejeitado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns((appointment) => {
          setSelectedAppointment(appointment);
        })}
        data={filteredData}
        searchKey="responsible"
        searchPlaceholder="Buscar por responsável..."
      />

      {selectedAppointment && (
        <AppointmentDetailsDialog
          appointment={selectedAppointment}
          open={!!selectedAppointment}
          onOpenChange={(open) => !open && setSelectedAppointment(null)}
        />
      )}
    </>
  );
}
