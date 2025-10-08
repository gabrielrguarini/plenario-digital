"use server";
import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export const updateUsers = async (user: User) => {
  try {
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
