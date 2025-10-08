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
    <div className="min-h-screen bg-background">
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
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="#regras"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Requisitos
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Building2 className="h-4 w-4" />
            Espaço Público para Eventos Institucionais
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Agendamento do Plenário da Câmara Municipal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Solicite o uso do espaço do plenário para eventos, reuniões,
            audiências públicas e outras atividades de interesse público,
            conforme disponibilidade e normas de utilização.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/plenario/agendar">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Solicitar Agendamento
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Características do Plenário */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Características do Espaço
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Infraestrutura completa para eventos institucionais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-background">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como Funciona o Agendamento
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Processo transparente para solicitação de uso do espaço
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileTextIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClockIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
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
        className="bg-card border-y border-border py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Requisitos e Normas
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Condições para utilização do espaço do plenário
              </p>
            </div>

            <Card className="border-border bg-background">
              <CardContent className="pt-6 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Eventos Permitidos
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Audiências públicas e consultas populares</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reuniões de conselhos municipais e comissões</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Eventos educacionais e culturais de interesse público
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Seminários, palestras e conferências institucionais
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Solenidades e cerimônias oficiais</span>
                    </li>
                  </ul>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">
                    Requisitos Obrigatórios
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Solicitação com{" "}
                        <strong className="text-foreground">
                          antecedência mínima de 15 dias
                        </strong>{" "}
                        da data do evento
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Identificação completa da organização ou entidade
                        solicitante
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Descrição detalhada do evento e sua finalidade
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Indicação do responsável pelo evento com dados de
                        contato
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Assinatura de termo de responsabilidade pelo uso do
                        espaço
                      </span>
                    </li>
                  </ul>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4 mt-8">
                    Informações Importantes
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-red-600">
                          i
                        </span>
                      </div>
                      <span>
                        O uso do plenário não pode conflitar com as atividades
                        legislativas da Casa
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-red-600">
                          i
                        </span>
                      </div>
                      <span>
                        Eventos com fins político-partidários ou comerciais não
                        são permitidos
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-red-600">
                          i
                        </span>
                      </div>
                      <span>
                        O solicitante é responsável pela organização, limpeza e
                        conservação do espaço
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-red-600">
                          i
                        </span>
                      </div>
                      <span>
                        A Câmara Municipal reserva-se o direito de cancelar
                        eventos por motivos de força maior
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-red-600">
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Pronto para Agendar?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 text-balance">
              Utilize o espaço do plenário para seu evento institucional ou de
              interesse público
            </p>
            <Link href="/plenario/agendar">
              <Button size="lg" variant="secondary" className="gap-2">
                Solicitar Agendamento do Plenário
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-foreground">
                  Câmara Municipal
                </p>
                <p className="text-xs text-muted-foreground">
                  Sistema de Agendamento
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Câmara Municipal. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
