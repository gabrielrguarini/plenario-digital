"use client";
import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "./ui/button";

export const AuthButton = () => {
  const session = useSession();
  if (session.isPending)
    <Button variant="outline" size="sm" disabled>
      Carregando...
    </Button>;
  if (session?.data?.user.name)
    <Button
      onClick={async () => {
        await authClient.signOut();
      }}
      variant="outline"
      size="sm"
    >
      Sair
    </Button>;

  return (
    <Link href="/sign-in">
      <Button variant="outline" size="sm">
        Entrar
      </Button>
    </Link>
  );
};
