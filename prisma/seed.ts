import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Insertando datos...");

  const teamsData = [
    { id: "3b8e", name: "G2", region: "EMEA" },
    { id: "9d22", name: "RAZAH COMPANY", region: "SAL" },
    { id: "d055", name: "OXYGEN", region: "NAL" },
    { id: "6de1", name: "CAG", region: "APAC" },
  ];
  
  // Inserta equipos antes que jugadores
  for (const team of teamsData) {
    await prisma.team.upsert({
      where: { id: team.id },
      update: {},
      create: team,
    });
  }
  

  // 🔥 Insertamos los jugadores
  const playersData = [
    { id: "81", nickname: "Blaz", role: "Entry", teamId: "3b8e", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/81.png", points: 0 },
    { id: "82", nickname: "UNNO", role: "Entry", teamId: "3b8e", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/82.png", points: 0 },
    { id: "83", nickname: "Alemao", role: "Support", teamId: "3b8e", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/83.png", points: 0 },
    { id: "84", nickname: "Loira", role: "Entry", teamId: "3b8e", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/84.png", points: 0 },
    { id: "85", nickname: "Doki", role: "Flex", teamId: "3b8e", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/85.png", points: 0 },
    { id: "86", nickname: "Bassetto", role: "Entry", teamId: "9d22", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/86.png", points: 0 },
    { id: "87", nickname: "Flastry", role: "Entry", teamId: "9d22", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/87.png", points: 0 },
    { id: "88", nickname: "live", role: "Support", teamId: "9d22", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/88.png", points: 0 },
    { id: "89", nickname: "Peres", role: "Entry", teamId: "9d22", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/89.png", points: 0 },
    { id: "90", nickname: "Stk", role: "Flex", teamId: "9d22", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/90.png", points: 0 },
    { id: "91", nickname: "Nuers", role: "Entry", teamId: "d055", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/91.png", points: 0 },
    { id: "92", nickname: "DiasLucasBr", role: "Entry", teamId: "d055", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/92.png", points: 0 },
    { id: "93", nickname: "GMZ", role: "Support", teamId: "d055", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/93.png", points: 0 },
    { id: "94", nickname: "Yoggah", role: "Entry", teamId: "d055", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/94.png", points: 0 },
    { id: "95", nickname: "Hat", role: "Flex", teamId: "d055", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/95.png", points: 0 },
    { id: "96", nickname: "Anitun", role: "Entry", teamId: "6de1", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/96.png", points: 0 },
    { id: "97", nickname: "BlackRay", role: "Entry", teamId: "6de1", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/97.png", points: 0 },
    { id: "98", nickname: "Chibisu", role: "Support", teamId: "6de1", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/98.png", points: 0 },
    { id: "99", nickname: "ShuReap", role: "Entry", teamId: "6de1", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/99.png", points: 0 },
    { id: "100", nickname: "Sironeko", role: "Flex", teamId: "6de1", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/100.png", points: 0 }
  ];

  for (const player of playersData) {
    await prisma.player.upsert({
      where: { id: player.id },
      update: {},
      create: player,
    });
  }
  console.log("✅ Jugadores insertados");


  // 🔥 Insertamos los participantes
  const participantsData = [
    { id: "1", name: "Scy", photo: "https://pbs.twimg.com/profile_images/1727386391934279680/Nk9TYWkQ_400x400.jpg" },
    { id: "2", name: "Wazo", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/046a5cc9-07b0-4e8e-baef-2a35666e9d2a.png" },
    { id: "3", name: "Rocio", photo: "https://x.com/rocioacasas/photo" },
    { id: "4", name: "Macjony", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/046a5cc9-07b0-4e8e-baef-2a35666e9d2a.png" },
    { id: "5", name: "Vetel", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/046a5cc9-07b0-4e8e-baef-2a35666e9d2a.png" },
    { id: "6", name: "David", photo: "https://x.com/rocioacasas/photo" },
    { id: "7", name: "Tebi", photo: "https://x.com/rocioacasas/photo" },
    { id: "8", name: "Nao", photo: "https://x.com/rocioacasas/photo" },
    { id: "9", name: "Al3", photo: "https://x.com/rocioacasas/photo" },
    { id: "10", name: "Monkey", photo: "https://x.com/rocioacasas/photo" },
    { id: "11", name: "Mani", photo: "https://x.com/rocioacasas/photo" },
  ];

  for (const participant of participantsData) {
    await prisma.participant.upsert({
      where: { id: participant.id },
      update: {},
      create: participant,
    });
  }
  console.log("✅ Participantes insertados");

  // 🔥 Insertamos el historial del draft
  const draftHistoryData = [
    { id: "1", participantId: "3", playerId: "19", timestamp: new Date("2025-01-28T15:00:00Z") },
    { id: "2", participantId: "5", playerId: "10", timestamp: new Date("2025-01-28T15:02:00Z") },
  ];

  for (const pick of draftHistoryData) {
    await prisma.draft.create({
      data: pick, // Cambia 'draftHistory' por 'draft'
    });
  }
  console.log("✅ DraftHistory insertado");
}

main()
  .catch((e) => {
    console.error("❌ Error en el seed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
