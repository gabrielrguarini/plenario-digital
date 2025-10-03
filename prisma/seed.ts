import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Limpa o banco: delete na ordem inversa das relações
  await prisma.appointment.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.user.deleteMany();

  // Gera senha hash

  // Admin
  await prisma.user.create({
    data: {
      name: "Administrador",
      email: "admin@exemplo.com",
      role: "ADMIN",
      institution: "Instituto Federal",
      institutionRole: "Administrador",
      emailVerified: true,
      image: null,
    },
  });

  // Usuário comum
  const user = await prisma.user.create({
    data: {
      name: "João Silva",
      email: "joao@exemplo.com",
      role: "USER",
      institution: "Universidade X",
      institutionRole: "Professor",
      emailVerified: false,
      image: null,
    },
  });

  // Agendamentos
  await prisma.appointment.createMany({
    data: [
      {
        userId: user.id,
        start: new Date("2025-10-10T14:00:00"),
        end: new Date("2025-10-10T15:00:00"),
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
        start: new Date("2025-10-12T09:00:00"),
        end: new Date("2025-10-12T10:00:00"),
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

  // Sessão de exemplo
  await prisma.session.create({
    data: {
      id: "sessao-1",
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      token: "token-exemplo",
      ipAddress: "127.0.0.1",
      userAgent: "seed-script",
      userId: user.id,
    },
  });

  // Conta de exemplo
  await prisma.account.create({
    data: {
      id: "conta-1",
      accountId: "acc-joao",
      providerId: "google",
      userId: user.id,
      accessToken: "access-token",
      refreshToken: "refresh-token",
      idToken: "id-token",
      scope: "profile email",
    },
  });

  // Verificação de exemplo
  await prisma.verification.create({
    data: {
      id: "verif-1",
      identifier: "joao@exemplo.com",
      value: "codigo123",
      expiresAt: new Date(Date.now() + 1000 * 60 * 10),
    },
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
