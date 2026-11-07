import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Inicializa a conexão SQLite com o adapter do Prisma v7
const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const lista = await prisma.jogo.findMany({
    include: {
        personagem: true,
        Conquistas: true,
        Plataformas: { include: { plataforma: true } },
    },
});
console.dir(lista, { depth: null }); // mostra tudo, com as tabelas ligadas por dentro
