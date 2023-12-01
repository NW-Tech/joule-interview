import { Module } from "@nestjs/common";
import { ArticlesController } from "./articles.controller";
import { ArticlesModule } from "src/domain/articles/articles.module";

@Module({
    controllers: [ArticlesController],
    imports: [ArticlesModule],
})
export class ArticlesApiModule {}
