import { CheckCircle, Clock, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Session {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
    institution: string;
    institutionRole: string;
    role?: string | null | undefined;
    userStatus?: string | null | undefined;
  };
}

export const UserStatus = ({ session }: { session: Session | null }) => {
  const isPending =
    !session?.user.userStatus || session?.user.userStatus === "PENDING";

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isPending ? "bg-yellow-100" : "bg-green-100"
          }`}
        >
          {isPending ? (
            <Clock className="h-8 w-8 text-yellow-600" />
          ) : (
            <CheckCircle className="h-8 w-8 text-green-600" />
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
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 border-yellow-300"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Pendente
                </Badge>
              ) : (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 border-green-300"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Aprovado
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              Informações do seu cadastro
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* User Info */}
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

            {/* Status Message */}
            {isPending ? (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900 mb-1">
                      Aguardando Aprovação
                    </p>
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      Seu cadastro está em análise pelo Diretor da Câmara. Você
                      receberá um email quando for aprovado. Após a aprovação,
                      você poderá solicitar agendamentos.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900 mb-1">
                      Cadastro Aprovado!
                    </p>
                    <p className="text-sm text-green-800 leading-relaxed mb-3">
                      Seu cadastro foi aprovado. Agora você pode solicitar o uso
                      da palavra ou o uso do plenário.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href="/agendar">
                        <Button size="sm" className="w-full sm:w-auto">
                          Solicitar Uso da Palavra
                        </Button>
                      </Link>
                      <Link href="/plenario/agendar">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full sm:w-auto bg-transparent"
                        >
                          Solicitar Uso do Plenário
                        </Button>
                      </Link>
                    </div>
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
