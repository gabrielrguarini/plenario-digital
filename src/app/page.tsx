"use server";
import Link from "next/link";
import {
  UserCheck,
  FileText,
  CheckCircle,
  ArrowRight,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { headers } from "next/headers";

export default async function LandingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Building2 className="h-4 w-4" />
              Câmara Municipal
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Sistema de Agendamento Digital
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Participe das sessões legislativas e reserve o espaço do plenário
              de forma simples, transparente e digital
            </p>

            {!session?.user && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="gap-2 text-base px-8 cursor-pointer"
                  >
                    Criar Conta
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-base px-8 bg-transparent cursor-pointer"
                  >
                    Já tenho conta
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Processo simples e transparente em 4 etapas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Cadastro
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crie sua conta informando seus dados pessoais e institucionais
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Aprovação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Diretor da Câmara analisa e aprova seu cadastro
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Solicitação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solicite uso da palavra ou do plenário através do sistema
                </p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Confirmação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receba a confirmação e acompanhe o status da sua solicitação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Serviços Disponíveis
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Escolha o tipo de agendamento que você precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative p-8 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Uso da Palavra
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solicite o direito de opinar sobre projetos de lei durante
                    as sessões legislativas, conforme o Artigo 210 do Regimento
                    Interno.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Inscrição até 17h da segunda-feira anterior</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Aprovação pela Mesa Diretora</span>
                  </li>
                </ul>
                <Link href="/agendar" className="block">
                  <Button className="w-full gap-2 group-hover:gap-3 transition-all">
                    Solicitar Agora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl border-2 border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-7 w-7 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Uso do Plenário
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reserve o espaço do plenário para eventos, reuniões e
                    atividades institucionais com capacidade para até 500
                    pessoas.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Antecedência mínima de 15 dias</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Aprovação pelo Diretor da Câmara</span>
                  </li>
                </ul>
                <Link href="/plenario" className="block">
                  <Button
                    variant="secondary"
                    className="w-full gap-2 group-hover:gap-3 transition-all"
                  >
                    Saiba Mais
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-foreground">
                  Câmara Municipal
                </p>
                <p className="text-sm text-muted-foreground">
                  Sistema de Agendamento Digital
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/meus-agendamentos"
                className="hover:text-foreground transition-colors"
              >
                Meus Agendamentos
              </Link>
              <span className="hidden sm:inline">•</span>
              <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
