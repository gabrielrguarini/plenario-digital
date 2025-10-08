"use server";

import { prisma } from "@/lib/prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch {
    throw new Error("Failed to fetch appointments");
  }
}
