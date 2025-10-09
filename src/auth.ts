import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./lib/prisma";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    additionalFields: {
      institution: { type: "string", required: true, input: true },
      institutionRole: { type: "string", required: true, input: true },
      role: { type: "string", required: false, input: true },
      userStatus: { type: "string", required: false, input: false },
    },
  },
});
