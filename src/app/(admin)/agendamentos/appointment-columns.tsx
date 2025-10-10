"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppointmentWithUser } from "@/lib/shared.types";

const statusMap = {
  PENDING: { label: "Pendente", variant: "warning" as const },
  APPROVED: { label: "Aprovado", variant: "success" as const },
  REJECTED: { label: "Rejeitado", variant: "destructive" as const },
};

export const columns: ColumnDef<AppointmentWithUser>[] = [
  {
    accessorKey: "user.name",
    id: "responsible",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Responsável
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.original.user.name}</div>;
    },
    filterFn: (row, id, value) => {
      return row.original.user.name.toLowerCase().includes(value.toLowerCase());
    },
  },
  {
    accessorKey: "user.institution",
    id: "institution",
    header: "Instituição",
    cell: ({ row }) => {
      return <div>{row.original.user.institution}</div>;
    },
  },
  {
    accessorKey: "start",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data/Hora
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const start = new Date(row.getValue("start"));
      return (
        <div>
          <div className="font-medium">
            {format(start, "dd/MM/yyyy", { locale: ptBR })}
          </div>
          <div className="text-muted-foreground text-sm">
            {format(start, "HH:mm", { locale: ptBR })}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "purpose",
    header: "Finalidade",
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate">{row.getValue("purpose")}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as keyof typeof statusMap;
      const { label, variant } = statusMap[status];
      return <Badge variant={variant}>{label}</Badge>;
    },
    filterFn: (row, id, value) => {
      if (value === "all") return true;
      return row.getValue(id) === value;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                // This will be handled by the parent component
                const event = new CustomEvent("view-appointment", {
                  detail: appointment,
                });
                window.dispatchEvent(event);
              }}
            >
              Ver detalhes
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
