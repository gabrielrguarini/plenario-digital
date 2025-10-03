"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarIcon,
  Clock,
  Users,
  Building2,
  Briefcase,
  MessageSquare,
  Mic,
  Loader2,
  Wifi,
  Presentation,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { appointmentSchema, type AppointmentFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { createAppointment } from "@/app/actions/create-appointment";
import { toast } from "sonner";
import { useState } from "react";

export function AppointmentForm({
  unavailableDates,
}: {
  unavailableDates: Date[];
}) {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      date: selectedDate ?? undefined,
      startTime: "",
      endTime: "",
      purpose: "",
      responsible: "",
      position: "",
      institution: "",
      expectedGuests: 1,
      extraRequests: "",
      equipment: {
        projector: false,
        soundSystem: false,
        wifi: false,
      },
    },
  });

  const onSubmit = async ({
    date,
    startTime,
    endTime,
    purpose,
    responsible,
    position,
    institution,
    expectedGuests,
    extraRequests,
    equipment: { projector, soundSystem, wifi },
  }: AppointmentFormData) => {
    try {
      await createAppointment({
        date: date,
        startTime: startTime,
        endTime: endTime,
        purpose: purpose,
        responsible: responsible,
        position: position,
        institution: institution,
        expectedGuests: expectedGuests,
        extraRequests: extraRequests,
        equipment: {
          projector,
          soundSystem,
          wifi,
        },
      });

      toast("Agendamento criado com sucesso!");

      form.reset();
      setSelectedDate(undefined);
    } catch {
      toast.error("Erro ao criar agendamento. Tente novamente.", {
        description: "Se o problema persistir, contate o suporte.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Date Selection */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Data do Agendamento
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP", { locale: ptBR })
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date ?? undefined)}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return (
                        date < today ||
                        unavailableDates.some(
                          (d) => d.toDateString() === date.toDateString()
                        )
                      );
                    }}
                    autoFocus
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Horário de Início
                </FormLabel>
                <Input type="time" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Horário de Término
                </FormLabel>
                <Input type="time" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Purpose */}
        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Finalidade</FormLabel>
              <Input
                placeholder="Ex: Reunião de equipe, Workshop, Apresentação..."
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Responsible Person Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="responsible"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Responsável
                </FormLabel>
                <Input placeholder="Nome completo" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Cargo
                </FormLabel>
                <Input placeholder="Ex: Gerente, Coordenador..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Institution and Expected Guests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Instituição
                </FormLabel>
                <Input placeholder="Nome da instituição" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedGuests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Número de Convidados
                </FormLabel>
                <Input
                  type="number"
                  min={1}
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseInt(e.target.value) || 1)
                  }
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Equipment */}
        <div className="space-y-4">
          <FormLabel>Equipamentos Necessários</FormLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="equipment.projector"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="flex items-center gap-2 font-normal cursor-pointer">
                      <Presentation className="h-4 w-4" />
                      Sistema de Vídeo
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="equipment.wifi"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="flex items-center gap-2 font-normal cursor-pointer">
                      <Wifi className="h-4 w-4" />
                      Wifi
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="equipment.soundSystem"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="flex items-center gap-2 font-normal cursor-pointer">
                      <Mic className="h-4 w-4" />
                      Microfone
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          {/* Extra Requests */}
          <FormField
            control={form.control}
            name="extraRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Solicitações Extras (Opcional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva qualquer solicitação adicional..."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Inclua qualquer informação adicional relevante para o
                  agendamento
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              "Confirmar Agendamento"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
