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
      <div className="text-center mb-8 md:mb-12">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isPending ? "bg-yellow-100" : "bg-red-100"
          }`}
        >
          {isPending ? (
            <Clock className="h-8 w-8 text-yellow-600" />
          ) : (
            <XCircle className="h-8 w-8 text-red-600" />
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-balance">
          Status do Cadastro
        </h1>
        <p className="text-slate-600 text-lg text-balance">
          Acompanhe o status da sua solicitação de cadastro
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl border-slate-200">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Seus Dados</CardTitle>
              {isPending ? (
                <Badge variant="warning">
                  <Clock className="h-3 w-3 mr-1" />
                  Pendente
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="h-3 w-3 mr-1" />
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
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Nome
                </p>
                <p className="text-base text-foreground">
                  {session?.user.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Email
                </p>
                <p className="text-base text-foreground">
                  {session?.user.email}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Instituição
                </p>
                <p className="text-base text-foreground">
                  {session?.user.institution}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Cargo/Função
                </p>
                <p className="text-base text-foreground">
                  {session?.user.institutionRole}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Data do Cadastro
                </p>
                <p className="text-base text-foreground">
                  {session?.user.createdAt.toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
            {isPending ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900 mb-1">
                      Aguardando Aprovação
                    </p>
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      Seu cadastro está em análise. Você poderá acompanhar por
                      aqui. Após a aprovação, você poderá solicitar
                      agendamentos.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex gap-3">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-900 mb-1">
                      Cadastro Rejeitado
                    </p>
                    <p className="text-sm text-red-800 leading-relaxed">
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
