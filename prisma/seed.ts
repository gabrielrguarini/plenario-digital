import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("123456", 10);

  // 👤 Admin
  await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@exemplo.com",
      password: passwordHash,
      role: "ADMIN",
      institution: "Instituto Federal",
      institutionRole: "Administrador",
    },
  });

  // 👤 Usuário comum
  const user = await prisma.user.create({
    data: {
      username: "joaosilva",
      email: "joao@exemplo.com",
      password: passwordHash,
      role: "USER",
      institution: "Universidade X",
      institutionRole: "Professor",
    },
  });

  // 📅 Agendamentos
  await prisma.appointment.createMany({
    data: [
      {
        userId: user.id,
        start: new Date("2025-10-10T14:00:00Z"),
        end: new Date("2025-10-10T15:00:00Z"),
        purpose: "Reunião com a coordenação",
        responsible: "João Silva",
        expectedGuests: 10,
        wifi: true,
        projector: false,
        soundSystem: true,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: user.id,
        start: new Date("2025-10-12T09:00:00Z"),
        end: new Date("2025-10-12T10:00:00Z"),
        purpose: "Palestra sobre IA",
        responsible: "João Silva",
        expectedGuests: 50,
        wifi: true,
        projector: true,
        soundSystem: true,
        status: "APPROVED",
        reviewedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  console.log("✅ Seed finalizado com sucesso.");
}

main()
  .catch((e) => {
    console.error("Erro ao executar seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
