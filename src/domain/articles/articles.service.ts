import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { Article, MutableArticle } from "./entities/article.entity";

@Injectable()
export class ArticlesService {
    constructor(private prisma: PrismaService) {}

    create = (article: MutableArticle) => {
        return this.prisma.article.create({ data: article });
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

    findDrafts = () => {
        return this.prisma.article.findMany({ where: { published: false } });
    };

    findOne = (id: number) => {
        return this.prisma.article.findUnique({ where: { id } });
    };

    update = (id: number, article: Partial<MutableArticle>) => {
        return this.prisma.article.update({
            where: { id },
            data: article,
        });
    };

    remove = (id: number) => {
        return this.prisma.article.delete({ where: { id } });
    };
}
