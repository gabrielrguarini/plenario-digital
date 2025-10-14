"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowUpDown, Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "@/generated/prisma";
import { updateUsers } from "@/app/actions/update-users";

const roleMap = {
  USER: { label: "Usuário", variant: "default" as const },
  ADMIN: { label: "Administrador", variant: "secondary" as const },
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <div className="lowercase">{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "institution",
    header: "Instituição",
    cell: ({ row }) => {
      return <div>{row.getValue("institution")}</div>;
    },
  },
  {
    accessorKey: "institutionRole",
    header: "Cargo",
    cell: ({ row }) => {
      return <div>{row.getValue("institutionRole")}</div>;
    },
  },
  {
    accessorKey: "role",
    header: "Tipo",
    cell: ({ row }) => {
      const role = row.getValue("role") as keyof typeof roleMap;
      const { label, variant } = roleMap[role];
      return <Badge variant={variant}>{label}</Badge>;
    },
  },
  {
    accessorKey: "userStatus",
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
      if (row.original.userStatus === "APPROVED") {
        return (
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span className="font-medium text-green-600">Verificado</span>
          </div>
        );
      }
      if (row.original.userStatus === "PENDING") {
        return (
          <div className="flex items-center gap-2 text-yellow-500">
            <Check className="h-4 w-4" />
            <span className="font-medium">Pendente</span>
          </div>
        );
      }
      return (
        <div className="flex items-center gap-2">
          <X className="h-4 w-4 text-red-600" />
          <span className="font-medium text-red-600">Rejeitado</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Cadastro
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{format(date, "dd/MM/yyyy", { locale: ptBR })}</div>;
    },
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const user = row.original;
      const isApproved = user.userStatus === "APPROVED";
      const isRejected = user.userStatus === "REJECTED";
      if (user.role === "ADMIN") return null;

      return (
        <div className="flex gap-2">
          {!isApproved && (
            <Button
              variant={"default"}
              size="sm"
              disabled={isApproved}
              onClick={async () => {
                updateUsers({
                  ...user,
                  userStatus: "APPROVED",
                });
              }}
            >
              {"Liberar Acesso"}
            </Button>
          )}
          {!isRejected && (
            <Button
              variant={"outline"}
              size="sm"
              disabled={isRejected}
              onClick={async () => {
                updateUsers({
                  ...user,
                  userStatus: "REJECTED",
                });
              }}
            >
              {"Revogar Acesso"}
            </Button>
          )}
        </div>
      );
    },
  },
];
