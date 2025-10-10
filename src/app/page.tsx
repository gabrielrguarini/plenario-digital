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
    <div className="bg-background min-h-screen">
      <section className="relative px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 text-center">
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Building2 className="h-4 w-4" />
              Câmara Municipal
            </div>
            <h1 className="text-foreground font-serif text-5xl leading-tight font-bold text-balance md:text-6xl lg:text-7xl">
              Sistema de Agendamento Digital
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed text-balance md:text-2xl">
              Participe das sessões legislativas e reserve o espaço do plenário
              de forma simples, transparente e digital
            </p>

            {!session?.user && (
              <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="cursor-pointer gap-2 px-8 text-base"
                  >
                    Criar Conta
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer gap-2 bg-transparent px-8 text-base"
                  >
                    Já tenho conta
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-card border-border border-y py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
              Como Funciona
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance">
              Processo simples e transparente em 4 etapas
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                <UserCheck className="text-primary h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  1
                </div>
                <h3 className="text-foreground font-serif text-xl font-semibold">
                  Cadastro
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crie sua conta informando seus dados pessoais e institucionais
                </p>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                <FileText className="text-primary h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  2
                </div>
                <h3 className="text-foreground font-serif text-xl font-semibold">
                  Aprovação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Diretor da Câmara analisa e aprova seu cadastro
                </p>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                <MessageSquare className="text-primary h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  3
                </div>
                <h3 className="text-foreground font-serif text-xl font-semibold">
                  Solicitação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solicite uso da palavra ou do plenário através do sistema
                </p>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle className="text-primary h-8 w-8" />
              </div>
              <div className="space-y-2">
                <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  4
                </div>
                <h3 className="text-foreground font-serif text-xl font-semibold">
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
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
              Serviços Disponíveis
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance">
              Escolha o tipo de agendamento que você precisa
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group border-border bg-card hover:border-primary relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                  <MessageSquare className="text-primary h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-foreground font-serif text-2xl font-bold">
                    Uso da Palavra
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solicite o direito de opinar sobre projetos de lei durante
                    as sessões legislativas, conforme o Artigo 210 do Regimento
                    Interno.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2 text-sm">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Inscrição até 17h da segunda-feira anterior</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2 text-sm">
                    <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Aprovação pela Mesa Diretora</span>
                  </li>
                </ul>
                <Link href="/agendar" className="block">
                  <Button className="w-full gap-2 transition-all group-hover:gap-3">
                    Solicitar Agora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="group border-border bg-card hover:border-accent relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="space-y-6">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-14 w-14 items-center justify-center rounded-xl transition-colors">
                  <Building2 className="text-accent h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-foreground font-serif text-2xl font-bold">
                    Uso do Plenário
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reserve o espaço do plenário para eventos, reuniões e
                    atividades institucionais com capacidade para até 500
                    pessoas.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start gap-2 text-sm">
                    <CheckCircle className="text-accent mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Antecedência mínima de 15 dias</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2 text-sm">
                    <CheckCircle className="text-accent mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Aprovação pelo Diretor da Câmara</span>
                  </li>
                </ul>
                <Link href="/plenario" className="block">
                  <Button
                    variant="secondary"
                    className="w-full gap-2 transition-all group-hover:gap-3"
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
      <footer className="border-border bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Building2 className="text-primary h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground font-serif text-base font-semibold">
                  Câmara Municipal
                </p>
                <p className="text-muted-foreground text-sm">
                  Sistema de Agendamento Digital
                </p>
              </div>
            </div>
            <div className="text-muted-foreground flex flex-col items-center gap-4 text-sm sm:flex-row">
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
