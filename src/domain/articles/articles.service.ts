import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { Article, MutableArticle } from "./entities/article.entity";
import { validateUserCanMutateArticle } from "./rules";

@Injectable()
export class ArticlesService {
    constructor(private prisma: PrismaService) {}

    create = (article: MutableArticle) => {
        return this.prisma.article.create({
            data: { ...article, authorId: 1 },
        });
    };

    publish = (id: number) => {
        return this.prisma.article.update({
            where: { id },
            data: { published: true },
        });
    };

    findAll = async (): Promise<Article[]> => {
        return await this.prisma.article.findMany({
            where: { published: true },
        });
    };

    findMine = (authorId: number): Promise<Article[]> => {
        return this.prisma.article.findMany({
            where: { authorId },
        });
    };

    findDrafts = (authorId: number) => {
        return this.prisma.article.findMany({
            where: { published: false, authorId },
        });
    };

    findOne = (id: number) => {
        return this.prisma.article.findUnique({ where: { id } });
    };

    update = async (
        id: number,
        article: Partial<MutableArticle>,
        userId: number,
    ) => {
        const persistedArticle = await this.prisma.article.findUnique({
            where: { id },
        });
        validateUserCanMutateArticle(persistedArticle, userId);
        return this.prisma.article.update({
            where: { id },
            data: article,
        });
    };

    remove = async (id: number, userId: number) => {
        const article = await this.prisma.article.findUnique({ where: { id } });
        validateUserCanMutateArticle(article, userId);
        return this.prisma.article.delete({ where: { id } });
    };
}
