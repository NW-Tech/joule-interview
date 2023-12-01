import { Injectable } from "@nestjs/common";
import { EmailService } from "src/infrastructure/email/email.service";
import { Article } from "../articles/entities/article.entity";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";

@Injectable()
export class NotificationService {
    constructor(
        private emailService: EmailService,
        private prisme: PrismaService,
    ) {}

    notifyPublishedArticle = (article: Article) => {
        console.log(article);
    };
}
