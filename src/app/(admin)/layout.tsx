"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  if (session.user.role !== "ADMIN") {
    redirect("/");
  }
  return <div className="container mx-auto px-4 py-6">{children}</div>;
}
