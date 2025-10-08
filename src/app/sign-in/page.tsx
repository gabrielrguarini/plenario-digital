"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { z } from "zod";
import { toast } from "sonner";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";

const signInSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(1, { message: "Senha obrigatória" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    await signIn.email(
      {
        email: data.email,
        password: data.password,
      },

      {
        onError: () => {
          toast.error("Erro ao fazer login");
        },
        onSuccess: () => router.push("/"),
      }
    );
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 w-full">
      <Card className="w-full max-w-md rounded-md rounded-t-none">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Entre com seu email para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
