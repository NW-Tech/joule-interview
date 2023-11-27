import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const firstPost = await prisma.article.upsert({
        where: { title: "Is this a good article ?" },
        update: {},
        create: {
            title: "Is this a good article ?",
            body: "Answer in the comments",
            description: "We wonder what makes a good article",
            published: false,
        },
    });

    const secondPost = await prisma.article.upsert({
        where: { title: "Is this a good repository ?" },
        update: {},
        create: {
            title: "Is this a good repository ?",
            body: "Our engineers have been working hard, issuing new releases with many improvements...",
            description: "Assessing what makes a good repo",
            published: true,
        },
    });

    console.log({ firstPost, secondPost });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
