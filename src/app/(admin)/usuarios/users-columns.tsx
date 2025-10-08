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
    accessorKey: "emailVerified",
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
      const verified = row.getValue("emailVerified") as boolean;
      return (
        <div className="flex items-center gap-2">
          {verified ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">Verificado</span>
            </>
          ) : (
            <>
              <X className="h-4 w-4 text-amber-600" />
              <span className="text-amber-600 font-medium">Pendente</span>
            </>
          )}
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
      const verified = user.emailVerified;
      if (user.role === "ADMIN") return null;

      return (
        <Button
          variant={verified ? "outline" : "default"}
          size="sm"
          onClick={async () => {
            updateUsers({ ...user, emailVerified: !verified });
          }}
        >
          {verified ? "Revogar Acesso" : "Liberar Acesso"}
        </Button>
      );
    },
  },
];
