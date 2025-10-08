import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { AuthButton } from "./auth-button";
import { ReactNode } from "react";

export const Header = ({ children }: { children?: ReactNode }) => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <CalendarIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold text-foreground">
              Câmara Municipal
            </h1>
            <p className="text-xs text-muted-foreground">
              Sistema de Agendamento
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {children}
          <AuthButton />
        </nav>
      </div>
    </header>
  );
};
