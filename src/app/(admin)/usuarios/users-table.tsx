"use client";

import * as React from "react";
import { DataTable } from "@/components/ui/data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { User } from "@/generated/prisma";
import { columns } from "./users-columns";

interface UsersDataTableProps {
  users: User[];
}

export function UsersDataTable({ users }: UsersDataTableProps) {
  const [verificationFilter, setVerificationFilter] =
    React.useState<string>("all");

  const filteredData = React.useMemo(() => {
    if (verificationFilter === "all") return users;
    const isVerified = verificationFilter === "verified";
    return users.filter((user) => user.emailVerified === isVerified);
  }, [users, verificationFilter]);

  return (
    <>
      <div className="mb-4">
        <Label htmlFor="verification-filter">Filtrar por status</Label>
        <Select
          value={verificationFilter}
          onValueChange={setVerificationFilter}
        >
          <SelectTrigger id="verification-filter" className="w-[200px]">
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="verified">Verificados</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        searchKey="name"
        searchPlaceholder="Buscar por nome..."
      />
    </>
  );
}
