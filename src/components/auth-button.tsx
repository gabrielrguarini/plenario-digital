"use client";
import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const AuthButton = () => {
  const session = useSession();
  if (session.isPending) {
    return (
      <Button variant="outline" size="sm" disabled>
        Carregando...
      </Button>
    );
  }
  if (session?.data?.user.name) {
    return (
      <Button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                toast.success("Você saiu com sucesso.");
              },
            },
          });
        }}
        variant="outline"
        size="sm"
      >
        Sair
      </Button>
    );
  }
  return (
    <Link href="/sign-in">
      <Button variant="outline" size="sm">
        Entrar
      </Button>
    </Link>
  );
};
