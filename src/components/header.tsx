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
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <CalendarIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold text-foreground">
              Câmara Municipal de Espera Feliz
            </h1>
            <p className="text-xs text-muted-foreground">
              Sistema de Agendamento
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {isApproved && !isAdmin && (
            <>
              <Link
                href="/meus-agendamentos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Meus Agendamentos
              </Link>
              <Link
                href="/agendar"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Agendar
              </Link>
            </>
          )}
          {isAdmin && (
            <>
              <Link
                href="/agendamentos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Agendamentos
              </Link>
              <Link
                href="/usuarios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
