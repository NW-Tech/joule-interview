import { Module } from "@nestjs/common";
import { ArticlesModule } from "./articles/articles.module";
import { ArticlesController } from "./articles/articles.controller";

@Module({
    controllers: [ArticlesController],
    imports: [ArticlesModule],
})
export class ApiModule {}
