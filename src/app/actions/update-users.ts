"use server";
import { auth } from "@/auth";
import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";

export const updateUsers = async (user: User) => {
  const session = auth.api.getSession({
    headers: await headers(),
  });
  if (!(await session)?.user || (await session)?.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  try {
    if (user.role === "ADMIN") {
      throw new Error("Cannot change role to ADMIN");
    }
    const newUsers = prisma.user.update({
      where: { id: user.id },
      data: { ...user },
    });
    revalidateTag("users");
    return newUsers;
  } catch {
    throw new Error("Failed to update user");
  }
};
