"use server";
import { getUsers } from "@/app/actions/get-users";
import { UsersDataTable } from "./users-table";

export default async function UsuariosPage() {
  const users = await getUsers();

  return <UsersDataTable users={users} />;
}
