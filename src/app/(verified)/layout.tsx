"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Status } from "@/generated/prisma";
import { UserStatus } from "@/components/user-status";

export default async function LoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/sign-in");
  }
  if (session?.user.userStatus !== Status.APPROVED) {
    return <UserStatus session={session} />;
  }
  return <>{children}</>;
}
