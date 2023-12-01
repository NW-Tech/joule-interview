import { Module } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";

@Module({
    providers: [ArticlesService],
    imports: [PrismaModule],
    exports: [ArticlesService],
})
export class ArticlesModule {}
