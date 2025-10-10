import Link from "next/link";
import {
  Building2,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  Users,
  Mic,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlenarioLandingPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Building2 className="h-4 w-4" />
            Espaço Público para Eventos Institucionais
          </div>
          <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight font-bold text-balance md:text-6xl">
            Agendamento do Plenário da Câmara Municipal
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-balance md:text-xl">
            Solicite o uso do espaço do plenário para eventos, reuniões,
            audiências públicas e outras atividades de interesse público,
            conforme disponibilidade e normas de utilização.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/agendar">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Solicitar Agendamento
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-transparent sm:w-auto"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-card border-border border-y py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
                Características do Espaço
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                Infraestrutura completa para eventos institucionais
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-border bg-background">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    Capacidade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Espaço amplo com capacidade para até 500 pessoas, adequado
                    para eventos de grande porte e audiências públicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Mic className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    Sistema de Som
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistema de som profissional com microfones sem fio, mesa de
                    som e caixas acústicas para garantir áudio de qualidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Video className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    Recursos Audiovisuais
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Projetor multimídia, tela de projeção, sistema de gravação e
                    transmissão ao vivo disponíveis mediante solicitação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
                Como Funciona o Agendamento
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                Processo transparente para solicitação de uso do espaço
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <FileTextIcon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    1. Solicitação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Preencha o formulário com informações sobre o evento, data
                    desejada e recursos necessários.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <CalendarIcon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    2. Verificação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A equipe verifica a disponibilidade da data e
                    compatibilidade com a agenda da Casa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <ClockIcon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    3. Aprovação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Mesa Diretora analisa e aprova a solicitação conforme
                    critérios estabelecidos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                    <CheckCircleIcon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                    4. Confirmação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você recebe a confirmação com orientações e termo de
                    responsabilidade para assinatura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section
        id="regras"
        className="bg-card border-border border-y py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
                Requisitos e Normas
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                Condições para utilização do espaço do plenário
              </p>
            </div>

            <Card className="border-border bg-background">
              <CardContent className="space-y-6 pt-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-foreground mb-4 font-serif text-xl font-semibold">
                    Eventos Permitidos
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>Audiências públicas e consultas populares</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>Reuniões de conselhos municipais e comissões</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Eventos educacionais e culturais de interesse público
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Seminários, palestras e conferências institucionais
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>Solenidades e cerimônias oficiais</span>
                    </li>
                  </ul>

                  <h3 className="text-foreground mt-8 mb-4 font-serif text-xl font-semibold">
                    Requisitos Obrigatórios
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Solicitação com{" "}
                        <strong className="text-foreground">
                          antecedência mínima de 15 dias
                        </strong>{" "}
                        da data do evento
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Identificação completa da organização ou entidade
                        solicitante
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Descrição detalhada do evento e sua finalidade
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Indicação do responsável pelo evento com dados de
                        contato
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span>
                        Assinatura de termo de responsabilidade pelo uso do
                        espaço
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-foreground mt-8 mb-4 font-serif text-xl font-semibold">
                    Informações Importantes
                  </h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex gap-3">
                      <div className="bg-muted mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <span className="text-muted-foreground text-xs font-semibold">
                          i
                        </span>
                      </div>
                      <span>
                        O uso do plenário não pode conflitar com as atividades
                        legislativas da Casa
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-muted mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <span className="text-muted-foreground text-xs font-semibold">
                          i
                        </span>
                      </div>
                      <span>
                        Eventos com fins político-partidários ou comerciais não
                        são permitidos
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-muted mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <span className="text-muted-foreground text-xs font-semibold">
                          i
                        </span>
                      </div>
                      <span>
                        O solicitante é responsável pela organização, limpeza e
                        conservação do espaço
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-muted mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <span className="text-muted-foreground text-xs font-semibold">
                          i
                        </span>
                      </div>
                      <span>
                        A Câmara Municipal reserva-se o direito de cancelar
                        eventos por motivos de força maior
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-muted mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <span className="text-muted-foreground text-xs font-semibold">
                          i
                        </span>
                      </div>
                      <span>
                        Recursos audiovisuais devem ser solicitados no
                        formulário de agendamento
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Pronto para Agendar?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg text-balance">
              Utilize o espaço do plenário para seu evento institucional ou de
              interesse público
            </p>
            <Link href="/agendar">
              <Button size="lg" variant="secondary" className="gap-2">
                Solicitar Agendamento do Plenário
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="border-border bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                <CalendarIcon className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-foreground font-serif text-sm font-semibold">
                  Câmara Municipal
                </p>
                <p className="text-muted-foreground text-xs">
                  Sistema de Agendamento
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Câmara Municipal. Todos os
                direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
