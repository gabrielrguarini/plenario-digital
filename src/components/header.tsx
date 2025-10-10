"use server";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "./auth-button";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { Status } from "@/generated/prisma";

export const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const isAdmin = session?.user?.role === "ADMIN";
  const isApproved = session?.user?.userStatus === Status.APPROVED;
  return (
    <header className="border-border bg-card border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
            <CalendarIcon className="text-primary h-6 w-6" />
          </div>
          <div>
            <h1 className="text-foreground font-serif text-lg font-semibold">
              Câmara Municipal de Espera Feliz
            </h1>
            <p className="text-muted-foreground text-xs">
              Sistema de Agendamento
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {isApproved && !isAdmin && (
            <>
              <Link
                href="/meus-agendamentos"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Meus Agendamentos
              </Link>
              <Link
                href="/agendar"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Agendar
              </Link>
            </>
          )}
          {isAdmin && (
            <>
              <Link
                href="/agendamentos"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Agendamentos
              </Link>
              <Link
                href="/usuarios"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Usuários
              </Link>
            </>
          )}
          <AuthButton />
        </nav>
      </div>
    </header>
  );
};
