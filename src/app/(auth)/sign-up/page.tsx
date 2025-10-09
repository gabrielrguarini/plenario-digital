"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BriefcaseBusiness,
  Building2,
  Eye,
  EyeClosed,
  Loader2,
  Mail,
  TextCursorInput,
  User,
} from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const signUpSchema = z
    .object({
      name: z.string().min(2, { message: "Mínimo de 3 digtios" }),
      lastName: z.string().min(1, { message: "Mínimo de 3 digtios" }),
      institution: z.string().min(2, { message: "Instituição obrigatória" }),
      institutionRole: z
        .string()
        .min(2, { message: "Função na instituição obrigatória" }),
      email: z.string().email({ message: "Email inválido" }),
      password: z.string().min(6, { message: "Mínimo de 6 digtios" }),
      passwordConfirmation: z
        .string()
        .min(6, { message: "Mínimo de 6 digtios" }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      path: ["passwordConfirmation"],
      message: "As senhas não coincidem",
    });

  type SignUpFormData = z.infer<typeof signUpSchema>;

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      lastName: "",
      institution: "",
      institutionRole: "",
      password: "",
      passwordConfirmation: "",
      email: "",
    },
  });

  const onSubmit = async ({
    name,
    lastName,
    email,
    institution,
    institutionRole,
    password,
  }: SignUpFormData) => {
    console.log("Enviando dados:", name);
    await signUp.email({
      email,
      password,
      name: `${name} ${lastName}`,
      institution,
      institutionRole,
      callbackURL: "/agendar",
      fetchOptions: {
        onResponse: () => {},
        onRequest: () => {},
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: async () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-background px-4 w-full my-44">
      <Card className="w-full max-w-md rounded-md rounded-t-none">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Cadastro</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Insira as informações para criar uma conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <User className="h-4 w-4" />
                        Nome
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Nome"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <TextCursorInput className="h-4 w-4" />
                        Sobrenome
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Sobrenome"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Building2 className="h-4 w-4" />
                        Instituição
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Instituição"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={form.control}
                  name="institutionRole"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <BriefcaseBusiness className="h-4 w-4" />
                        Cargo
                      </FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Cargo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Mail className="h-4 w-4" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="exemplo@email.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupInput
                          type={isVisible ? "text" : "password"}
                          placeholder="Senha"
                          {...field}
                        />
                        <InputGroupAddon align="inline-end">
                          <button
                            type="button"
                            onClick={() => setIsVisible((prev) => !prev)}
                            className="flex size-6 items-center justify-center rounded-md"
                          >
                            {isVisible ? (
                              <EyeClosed className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupInput
                          type={isVisible ? "text" : "password"}
                          placeholder="Confirme a senha"
                          {...field}
                        />
                        <InputGroupAddon align="inline-end">
                          <button
                            type="button"
                            onClick={() => setIsVisible((prev) => !prev)}
                            className="flex size-6 items-center justify-center rounded-md"
                          >
                            {isVisible ? (
                              <EyeClosed className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Cadastrar"
                )}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary font-medium hover:underline focus:outline-none focus:underline"
                >
                  Fazer login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="w-full max-w-md mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-slate-700">
          <strong>Importante:</strong> Após o cadastro, sua conta será enviada
          para aprovação. Você poderá utilizar seu login para visualizar a
          situação do cadastro.
        </p>
      </div>
    </div>
  );
}
