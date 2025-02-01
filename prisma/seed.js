"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log("🌱 Insertando datos...");
    // 🔥 Insertamos los equipos primero para evitar errores de clave foránea
    const teamsData = [
        { id: "3f7b", name: "Team BDS", region: "EMEA" },
        { id: "a4d0", name: "Team Liquid", region: "SAL" },
        { id: "83aa", name: "Team W7M", region: "SAL" },
        { id: "9672", name: "Team Secret", region: "EMEA" },
        { id: "0aa5", name: "Team FaZe Clan", region: "SAL" },
        { id: "9e76", name: "Team EX-Beastcoast", region: "NAL" },
        { id: "a215", name: "Team DarkZero", region: "NAL" },
        { id: "5e62", name: "Team SSG", region: "NAL" },
        { id: "2627", name: "Team Virtus.PRO", region: "EMEA" },
        { id: "509f", name: "Team Falcons", region: "EMEA" },
        { id: "a3be", name: "Team M80", region: "NAL" },
        { id: "2f1f", name: "Team FURIA", region: "SAL" },
        { id: "9c9a", name: "Team Shopify Rebellion", region: "NAL" },
        { id: "af3c", name: "Team SCARZ", region: "APAC" },
        { id: "c01c", name: "Team BLED", region: "APAC" },
        { id: "4f2b", name: "Team PSG Talon", region: "APAC" },
    ];
    for (const team of teamsData) {
        await prisma.team.upsert({
            where: { id: team.id },
            update: {},
            create: team,
        });
    }
    console.log("✅ Equipos insertados");
    // 🔥 Insertamos los jugadores
    const playersData = [
        { id: "1", nickname: "Shaiiko", role: "Entry", teamId: "3f7b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/1.png", points: 0 },
        { id: "2", nickname: "BriD", role: "Support", teamId: "3f7b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/2.png", points: 0 },
        { id: "3", nickname: "LikEfac", role: "Flex", teamId: "3f7b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/3.png", points: 0 },
        { id: "4", nickname: "Yuzus", role: "Flex", teamId: "3f7b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/4.png", points: 0 },
        { id: "5", nickname: "Solotov", role: "Flex", teamId: "3f7b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/5.png", points: 0 },
        { id: "6", nickname: "Nesk", role: "Flex", teamId: "a4d0", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/6.png", points: 0 },
        { id: "7", nickname: "Paluh", role: "Entry", teamId: "a4d0", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/7.png", points: 0 },
        { id: "8", nickname: "Resetz", role: "Support", teamId: "a4d0", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/8.png", points: 0 },
        { id: "9", nickname: "Maia", role: "Entry", teamId: "a4d0", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/9.png", points: 0 },
        { id: "10", nickname: "Lagonis", role: "Support", teamId: "a4d0", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/10.png", points: 0 },
        { id: "11", nickname: "Soulz1", role: "Entry", teamId: "0aa5", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/11.png", points: 0 },
        { id: "12", nickname: "Handy", role: "Support", teamId: "0aa5", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/12.png", points: 0 },
        { id: "13", nickname: "Cyber", role: "Flex", teamId: "0aa5", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/13.png", points: 0 },
        { id: "14", nickname: "KDS", role: "Flex", teamId: "0aa5", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/14.png", points: 0 },
        { id: "15", nickname: "Vitaking", role: "Support", teamId: "0aa5", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/15.png", points: 0 },
        { id: "16", nickname: "D4sh", role: "Support", teamId: "83aa", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/16.png", points: 0 },
        { id: "17", nickname: "Dodez", role: "Entry", teamId: "83aa", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/17.png", points: 0 },
        { id: "18", nickname: "Dotz", role: "Support", teamId: "83aa", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/18.png", points: 0 },
        { id: "19", nickname: "L0BIN", role: "Entry", teamId: "83aa", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/19.png", points: 0 },
        { id: "20", nickname: "Volpz", role: "Flex", teamId: "83aa", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/20.png", points: 0 },
        { id: "21", nickname: "Atom", role: "Flex", teamId: "9e76", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/21.png", points: 0 },
        { id: "22", nickname: "Dream", role: "NO ROLE", teamId: "9e76", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/22.png", points: 0 },
        { id: "23", nickname: "Gaveni", role: "Entry", teamId: "9e76", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/23.png", points: 0 },
        { id: "24", nickname: "Hotancold", role: "Flex", teamId: "9e76", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/24.png", points: 0 },
        { id: "25", nickname: "SpiriTz", role: "Support", teamId: "9e76", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/25.png", points: 0 },
        { id: "26", nickname: "Savage", role: "Entry", teamId: "9672", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/26.png", points: 0 },
        { id: "27", nickname: "Jume", role: "Flex", teamId: "9672", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/27.png", points: 0 },
        { id: "28", nickname: "Gruby", role: "Flex", teamId: "9672", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/28.png", points: 0 },
        { id: "29", nickname: "Adrian", role: "Support", teamId: "9672", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/29.png", points: 0 },
        { id: "30", nickname: "Virtue", role: "Support", teamId: "9672", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/30.png", points: 0 },
        { id: "31", nickname: "NJR", role: "Flex", teamId: "a215", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/31.png", points: 0 },
        { id: "32", nickname: "Panbazou", role: "Flex", teamId: "a215", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/32.png", points: 0 },
        { id: "33", nickname: "Beaulo", role: "Flex", teamId: "a215", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/33.png", points: 0 },
        { id: "34", nickname: "Kobelax", role: "Entry", teamId: "a215", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/34.png", points: 0 },
        { id: "35", nickname: "Nafe", role: "Support", teamId: "a215", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/35.png", points: 0 },
        { id: "36", nickname: "Forrest", role: "Flex", teamId: "5e62", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/36.png", points: 0 },
        { id: "37", nickname: "Ashn", role: "Entry", teamId: "5e62", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/37.png", points: 0 },
        { id: "38", nickname: "J90", role: "Flex", teamId: "5e62", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/38.png", points: 0 },
        { id: "39", nickname: "Fultz", role: "Support", teamId: "5e62", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/39.png", points: 0 },
        { id: "40", nickname: "Benja", role: "Entry", teamId: "5e62", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/40.png", points: 0 },
        { id: "41", nickname: "p4sh4", role: "Flex", teamId: "2627", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/41.png", points: 0 },
        { id: "42", nickname: "Dan", role: "Entry", teamId: "2627", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/42.png", points: 0 },
        { id: "43", nickname: "ShepparD", role: "Support", teamId: "2627", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/43.png", points: 0 },
        { id: "44", nickname: "Always", role: "Flex", teamId: "2627", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/44.png", points: 0 },
        { id: "45", nickname: "JoyStiCK", role: "Flex", teamId: "2627", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/45.png", points: 0 },
        { id: "46", nickname: "Jlad", role: "Support", teamId: "509f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/46.png", points: 0 },
        { id: "47", nickname: "Guardz", role: "Support", teamId: "509f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/47.png", points: 0 },
        { id: "48", nickname: "Hashom", role: "Entry", teamId: "509f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/48.png", points: 0 },
        { id: "49", nickname: "Robby", role: "Flex", teamId: "509f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/49.png", points: 0 },
        { id: "50", nickname: "Dov2hkiin", role: "Flex", teamId: "509f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/50.png", points: 0 },
        { id: "51", nickname: "Gunnar", role: "Flex", teamId: "a3be", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/51.png", points: 0 },
        { id: "52", nickname: "DFZR", role: "Flex", teamId: "a3be", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/52.png", points: 0 },
        { id: "53", nickname: "BravoPlayer3", role: "Support", teamId: "a3be", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/53.png", points: 0 },
        { id: "54", nickname: "BravoPlayer4", role: "Entry", teamId: "a3be", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/54.png", points: 0 },
        { id: "55", nickname: "BravoPlayer5", role: "Flex", teamId: "a3be", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/55.png", points: 0 },
        { id: "56", nickname: "FelipoX", role: "Support", teamId: "2f1f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/56.png", points: 0 },
        { id: "57", nickname: "HerdsZ", role: "Entry", teamId: "2f1f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/57.png", points: 0 },
        { id: "58", nickname: "Jv92", role: "Entry", teamId: "2f1f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/58.png", points: 0 },
        { id: "59", nickname: "Kheyze", role: "Flex", teamId: "2f1f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/59.png", points: 0 },
        { id: "60", nickname: "Nade", role: "Support", teamId: "2f1f", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/60.png", points: 0 },
        { id: "61", nickname: "Rexen", role: "Flex", teamId: "9c9a", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/61.png", points: 0 },
        { id: "62", nickname: "Ambi", role: "Entry", teamId: "9c9a", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/62.png", points: 0 },
        { id: "63", nickname: "Gryxr", role: "Entry", teamId: "9c9a", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/63.png", points: 0 },
        { id: "64", nickname: "Canadian", role: "Support", teamId: "9c9a", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/64.png", points: 0 },
        { id: "65", nickname: "Surf", role: "Flex", teamId: "9c9a", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/65.png", points: 0 },
        { id: "66", nickname: "Rec", role: "Flex", teamId: "af3c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/66.png", points: 0 },
        { id: "67", nickname: "Nina", role: "Entry", teamId: "af3c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/67.png", points: 0 },
        { id: "68", nickname: "FishLike", role: "Support", teamId: "af3c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/68.png", points: 0 },
        { id: "69", nickname: "Wqsyo1", role: "Entry", teamId: "af3c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/69.png", points: 0 },
        { id: "70", nickname: "Taiyou", role: "Support", teamId: "af3c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/70.png", points: 0 },
        { id: "71", nickname: "Hovenherst", role: "Flex", teamId: "c01c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/71.png", points: 0 },
        { id: "72", nickname: "Player1", role: "NO ROLE", teamId: "c01c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/72.png", points: 0 },
        { id: "73", nickname: "Reeps96", role: "Entry", teamId: "c01c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/73.png", points: 0 },
        { id: "74", nickname: "MentalistC", role: "Support", teamId: "c01c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/74.png", points: 0 },
        { id: "75", nickname: "Leadr", role: "Flex", teamId: "c01c", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/75.png", points: 0 },
        { id: "76", nickname: "Misa", role: "Entry", teamId: "4f2b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/76.png", points: 0 },
        { id: "77", nickname: "Rider", role: "Entry", teamId: "4f2b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/77.png", points: 0 },
        { id: "78", nickname: "Soldier", role: "Support", teamId: "4f2b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/78.png", points: 0 },
        { id: "79", nickname: "Yass", role: "Flex", teamId: "4f2b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/79.png", points: 0 },
        { id: "80", nickname: "Gotti", role: "Support", teamId: "4f2b", photo: "https://static-esports.ubisoft.com/esports-platform/common/members/80.png", points: 0 },
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
