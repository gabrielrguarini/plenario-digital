import { Clock, XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Session } from "@/lib/auth-client";

export const UserStatus = ({ session }: { session: Session }) => {
  const userStatus = session?.user.userStatus;
  const isPending = userStatus === "PENDING";

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 text-center md:mb-12">
        <div
          className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${
            isPending ? "bg-yellow-100" : "bg-red-100"
          }`}
        >
          {isPending ? (
            <Clock className="h-8 w-8 text-yellow-600" />
          ) : (
            <XCircle className="h-8 w-8 text-red-600" />
          )}
        </div>
        <h1 className="mb-2 text-3xl font-bold text-balance text-slate-900 md:text-4xl">
          Status do Cadastro
        </h1>
        <p className="text-lg text-balance text-slate-600">
          Acompanhe o status da sua solicitação de cadastro
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Seus Dados</CardTitle>
              {isPending ? (
                <Badge variant="warning">
                  <Clock className="mr-1 h-3 w-3" />
                  Pendente
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="mr-1 h-3 w-3" />
                  Rejeitado
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              Informações do seu cadastro
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Nome
                </p>
                <p className="text-foreground text-base">
                  {session?.user.name}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Email
                </p>
                <p className="text-foreground text-base">
                  {session?.user.email}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Instituição
                </p>
                <p className="text-foreground text-base">
                  {session?.user.institution}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Cargo/Função
                </p>
                <p className="text-foreground text-base">
                  {session?.user.institutionRole}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">
                  Data do Cadastro
                </p>
                <p className="text-foreground text-base">
                  {session?.user.createdAt.toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
            {isPending ? (
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <div>
                    <p className="mb-1 font-medium text-yellow-900">
                      Aguardando Aprovação
                    </p>
                    <p className="text-sm leading-relaxed text-yellow-800">
                      Seu cadastro está em análise. Você poderá acompanhar por
                      aqui. Após a aprovação, você poderá solicitar
                      agendamentos.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="mb-1 font-medium text-red-900">
                      Cadastro Rejeitado
                    </p>
                    <p className="text-sm leading-relaxed text-red-800">
                      Seu cadastro foi rejeitado. entre em contato para mais
                      informações.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
